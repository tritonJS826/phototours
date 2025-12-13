CREATE TYPE role AS ENUM ('CLIENT', 'GUIDE', 'ADMIN');
CREATE TYPE difficulty_level AS ENUM ('EASY', 'MEDIUM', 'HARD');
CREATE TYPE material_type AS ENUM ('PDF', 'IMAGE', 'VIDEO', 'LINK', 'AUDIO');
CREATE TYPE booking_status AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');
CREATE TYPE payment_method AS ENUM ('CARD', 'PAYPAL', 'BANK_TRANSFER', 'CASH');
CREATE TYPE payment_status AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED');
CREATE OR REPLACE FUNCTION set_updated_at() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at := CURRENT_TIMESTAMP;
RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone VARCHAR(20),
    bio TEXT,
    profile_pic_url VARCHAR(512),
    role role DEFAULT 'CLIENT'::role NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TRIGGER set_updated_at_trigger BEFORE
UPDATE ON users FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE page_metadata (
    url TEXT PRIMARY KEY,
    tags TEXT NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TRIGGER set_updated_at_trigger_page_metadata BEFORE
UPDATE ON page_metadata FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_url TEXT NOT NULL,
    alt TEXT,
    author TEXT,
    featured BOOLEAN DEFAULT FALSE NOT NULL,
    published_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TRIGGER set_updated_at_trigger_article BEFORE
UPDATE ON articles FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE guides (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL UNIQUE,
    experience TEXT,
    specializations TEXT [],
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT guide_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TRIGGER set_updated_at_trigger_guides BEFORE
UPDATE ON guides FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE tours (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE DEFAULT gen_random_uuid()::text,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    difficulty difficulty_level NOT NULL,
    price DOUBLE PRECISION,
    program JSONB NOT NULL,
    guide_id INTEGER,
    cover_url TEXT,
    duration_days INTEGER,
    end_location TEXT,
    available_months TEXT [] DEFAULT ARRAY []::TEXT [] NOT NULL,
    languages TEXT [] DEFAULT ARRAY []::TEXT [] NOT NULL,
    min_age INTEGER,
    start_location TEXT,
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT tour_guide_id_fk FOREIGN KEY (guide_id) REFERENCES guides(id) ON UPDATE CASCADE ON DELETE
    SET NULL
);
CREATE TRIGGER set_updated_at_trigger_tours BEFORE
UPDATE ON tours FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE tour_dates (
    id SERIAL PRIMARY KEY,
    tour_id INTEGER NOT NULL,
    date TIMESTAMP(3) NOT NULL,
    group_size INTEGER NOT NULL,
    is_available BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT tour_date_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TRIGGER set_updated_at_trigger_tour_dates BEFORE
UPDATE ON tour_dates FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE tour_materials (
    id SERIAL PRIMARY KEY,
    tour_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    type material_type NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT tour_material_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE photos (
    id SERIAL PRIMARY KEY,
    tour_id INTEGER NOT NULL,
    url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT photo_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE videos (
    id SERIAL PRIMARY KEY,
    tour_id INTEGER NOT NULL,
    url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT video_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    tour_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    comment TEXT,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT review_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT review_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);
CREATE TABLE tour_tags (
    tag_id INTEGER NOT NULL,
    tour_id INTEGER NOT NULL,
    PRIMARY KEY (tag_id, tour_id),
    CONSTRAINT tour_tags_tag_id_fk FOREIGN KEY (tag_id) REFERENCES tags(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT tour_tags_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE
);
CREATE TABLE tour_categories (
    category_id INTEGER NOT NULL,
    tour_id INTEGER NOT NULL,
    PRIMARY KEY (category_id, tour_id),
    CONSTRAINT tour_categories_category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT tour_categories_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    tour_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    status booking_status NOT NULL DEFAULT 'PENDING',
    participants INTEGER NOT NULL,
    total_price DOUBLE PRECISION NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT booking_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT booking_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TRIGGER set_updated_at_trigger_bookings BEFORE
UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    booking_id INTEGER NOT NULL,
    amount DOUBLE PRECISION NOT NULL,
    payment_method payment_method NOT NULL,
    status payment_status NOT NULL DEFAULT 'PENDING',
    transaction_id TEXT,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT payment_booking_id_fk FOREIGN KEY (booking_id) REFERENCES bookings(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TRIGGER set_updated_at_trigger_payments BEFORE
UPDATE ON payments FOR EACH ROW EXECUTE FUNCTION set_updated_at();
