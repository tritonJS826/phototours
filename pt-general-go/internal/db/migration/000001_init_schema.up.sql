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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
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
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL UNIQUE,
    experience TEXT,
    specializations TEXT [],
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT guide_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TRIGGER set_updated_at_trigger_guides BEFORE
UPDATE ON guides FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE tours (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE DEFAULT gen_random_uuid()::text,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    difficulty difficulty_level NOT NULL,
    price DOUBLE PRECISION,
    program JSONB NOT NULL,
    guide_id UUID,
    cover_url TEXT,
    duration_days INTEGER,
    end_location TEXT,
    available_months TEXT [] DEFAULT ARRAY []::TEXT [] NOT NULL,
    languages TEXT [] DEFAULT ARRAY []::TEXT [] NOT NULL,
    min_age INTEGER,
    start_location TEXT,
    location TEXT,
    group_size INTEGER DEFAULT 10 CHECK (group_size >= 1 AND group_size <= 500),
    spots_left INTEGER DEFAULT 1 CHECK (spots_left >= 1 AND spots_left <= 500),
    subtitle TEXT DEFAULT 'About',
    created_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT tour_guide_id_fk FOREIGN KEY (guide_id) REFERENCES guides(id) ON UPDATE CASCADE ON DELETE
    SET NULL
);
CREATE TRIGGER set_updated_at_trigger_tours BEFORE
UPDATE ON tours FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE tour_dates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tour_id UUID NOT NULL,
    date_from TIMESTAMP(3) NOT NULL,
    date_to TIMESTAMP(3) NOT NULL,
    group_size INTEGER NOT NULL,
    is_available BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT tour_date_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT check_dates CHECK (date_to >= date_from)
);
CREATE TRIGGER set_updated_at_trigger_tour_dates BEFORE
UPDATE ON tour_dates FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE tour_materials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tour_id UUID NOT NULL,
    title TEXT NOT NULL,
    url TEXT NOT NULL,
    type material_type NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT tour_material_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE photos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tour_id UUID NOT NULL,
    url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT photo_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tour_id UUID NOT NULL,
    url TEXT NOT NULL,
    description TEXT,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT video_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    tour_id UUID NOT NULL,
    rating INTEGER NOT NULL,
    comment TEXT,
    user_name TEXT DEFAULT '' NOT NULL,
    link TEXT DEFAULT '' NOT NULL,
    image TEXT DEFAULT '' NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT review_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT review_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TABLE tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);
CREATE TABLE tour_tags (
    tag_id UUID NOT NULL,
    tour_id UUID NOT NULL,
    PRIMARY KEY (tag_id, tour_id),
    CONSTRAINT tour_tags_tag_id_fk FOREIGN KEY (tag_id) REFERENCES tags(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT tour_tags_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL UNIQUE
);
CREATE TABLE tour_categories (
    category_id UUID NOT NULL,
    tour_id UUID NOT NULL,
    PRIMARY KEY (category_id, tour_id),
    CONSTRAINT tour_categories_category_id_fk FOREIGN KEY (category_id) REFERENCES categories(id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT tour_categories_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    tour_date_id UUID NOT NULL,
    status booking_status NOT NULL DEFAULT 'PENDING',
    participants INTEGER NOT NULL,
    total_price DOUBLE PRECISION NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT booking_tour_date_id_fk FOREIGN KEY (tour_date_id) REFERENCES tour_dates(id) ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT booking_user_id_fk FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE RESTRICT
);
CREATE TRIGGER set_updated_at_trigger_bookings BEFORE
UPDATE ON bookings FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id UUID NOT NULL,
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
CREATE TABLE booking_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL
);
CREATE TRIGGER set_updated_at_trigger_booking_requests BEFORE
UPDATE ON booking_requests FOR EACH ROW EXECUTE FUNCTION set_updated_at();
CREATE TABLE tour_activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tour_id UUID NOT NULL,
    activity TEXT NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT tour_activity_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE tour_included (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tour_id UUID NOT NULL,
    included TEXT NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT tour_included_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE tour_summary (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tour_id UUID NOT NULL,
    name TEXT NOT NULL,
    value TEXT NOT NULL,
    created_at TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT tour_summary_tour_id_fk FOREIGN KEY (tour_id) REFERENCES tours(id) ON UPDATE CASCADE ON DELETE CASCADE
);
