import React, {useState} from "react";
// eslint-disable-next-line no-restricted-imports
import styles from "./Booking.module.scss";

interface Tour {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

interface BookingForm {
  tourId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  participants: number;
  startDate: string;
  specialRequests: string;
}

const availableTours: Tour[] = [
  {
    id: "1",
    name: "Фототур по Санкт-Петербургу",
    description: "Профессиональная фотосъемка в самых живописных местах города",
    price: 15000,
    duration: "1 день",
    image: "/images/spb-tour.jpg",
  },
  {
    id: "2",
    name: "Фототур по Москве",
    description: "Захватывающие виды столицы с профессиональным фотографом",
    price: 18000,
    duration: "1 день",
    image: "/images/moscow-tour.jpg",
  },
  {
    id: "3",
    name: "Фототур по Золотому кольцу",
    description: "Путешествие по древним городам России с фотосъемкой",
    price: 25000,
    duration: "3 дня",
    image: "/images/golden-ring.jpg",
  },
];

export const Booking: React.FC = () => {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [formData, setFormData] = useState<BookingForm>({
    tourId: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    participants: 1,
    startDate: "",
    specialRequests: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setFormData(prev => ({...prev, tourId: tour.id}));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTour) {
      setMessage({type: "error", text: "Пожалуйста, выберите тур"});

      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const totalPrice = selectedTour.price * formData.participants;
      const successMessage =
        "Бронирование успешно оформлено! Мы свяжемся с вами в ближайшее время для " +
        `подтверждения деталей. Сумма к оплате: ${totalPrice} ₽`;
      setMessage({
        type: "success",
        text: successMessage,
      });

      // Сброс формы
      setFormData({
        tourId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        participants: 1,
        startDate: "",
        specialRequests: "",
      });
      setSelectedTour(null);

    } catch {
      setMessage({type: "error", text: "Ошибка при оформлении бронирования. Попробуйте еще раз."});
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.booking}>
      <h2>
        Бронирование фототуров
      </h2>
      <p>
        Выберите тур и заполните форму для бронирования
      </p>

      {message && (
        <div className={`${styles.message} ${styles[message.type]}`}>
          {message.text}
        </div>
      )}

      <div className={styles.toursGrid}>
        {availableTours.map(tour => (
          <div
            key={tour.id}
            className={`${styles.tourCard} ${selectedTour?.id === tour.id ? styles.selected : ""}`}
            onClick={() => handleTourSelect(tour)}
          >
            <div className={styles.tourImage}>
              <img
                src={tour.image}
                alt={tour.name}
              />
            </div>
            <div className={styles.tourInfo}>
              <h3>
                {tour.name}
              </h3>
              <p>
                {tour.description}
              </p>
              <div className={styles.tourDetails}>
                <span className={styles.price}>
                  {tour.price.toLocaleString()}
                  {" "}
                  ₽
                </span>
                <span className={styles.duration}>
                  {tour.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedTour && (
        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <h3>
            Данные для бронирования
          </h3>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">
                Имя *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName">
                Фамилия *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="email">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">
                Телефон *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="participants">
                Количество участников *
              </label>
              <input
                type="number"
                id="participants"
                name="participants"
                value={formData.participants}
                onChange={handleInputChange}
                min="1"
                max="10"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="startDate">
                Дата начала *
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="specialRequests">
              Особые пожелания
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={3}
              placeholder="Укажите особые пожелания или требования..."
            />
          </div>

          <div className={styles.summary}>
            <h4>
              Итого к оплате:
            </h4>
            <p className={styles.totalPrice}>
              {(selectedTour.price * formData.participants).toLocaleString()}
              {" "}
              ₽
            </p>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Оформление..." : "Забронировать тур"}
          </button>
        </form>
      )}
    </div>
  );
};
