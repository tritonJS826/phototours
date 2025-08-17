import {useEffect, useState} from "react";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import styles from "src/pages/adminPage/AdminPage.module.scss";

type Guide = {
  id: number;
  userId: number;
  experience: string;
  specializations: string[];
  user?: {
    id: number;
    firstName: string;
    lastName: string;
  };
};

type Tour = {
  id: number;
  title: string;
  guide?: Guide;
  photos?: {id: number; url: string}[];
};

export function AdminPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [, setError] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/tours`)
      .then((res) => res.json()
        .then((data) => {
          setTours(data);
        })
        .catch((err) => setError("Failed to load tours: " + err.message)));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this tour?")) {
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/tours/${id}`, {method: "DELETE"});
      if (res.ok) {
        setTours((prev) => prev.filter((t) => t.id !== id));
        setSelectedTour(null);
      } else {
        const errorData = await res.json();
        setError(errorData.message || "Failed to delete tour");
      }
    } catch {
      setError("Error deleting tour:");
    }
  };

  const filteredTours = tours.filter((tour) => {
    const titleMatch = tour.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const guideName = tour.guide?.user
      ? `${tour.guide.user.firstName} ${tour.guide.user.lastName}`.toLowerCase()
      : "";
    const guideMatch = guideName.includes(searchTerm.toLowerCase());

    return titleMatch || guideMatch;
  });

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            All Tours
          </h2>

          <div className={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search tours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className={styles.actionBtn}>
            {selectedTour && (
              <div className={styles.actions}>
                <Button
                  className={styles.hiddenBtn}
                  variant="primary"
                  href={`/admin/tours/${selectedTour.id}`}
                >
                  Edit
                </Button>
                <Button
                  className={styles.hiddenBtn}
                  variant="secondary"
                  onClick={() => handleDelete(selectedTour.id)}
                >
                  Delete
                </Button>
              </div>
            )}

            <Button
              className={styles.createButton}
              variant="primary"
              href="/admin/tours"
            >
              + Create Tour
            </Button>
          </div>

        </div>

        <div className={styles.tourGrid}>
          {filteredTours.length > 0
            ? (
              filteredTours.map((tour) => (
                <div
                  key={tour.id}
                  className={`${styles.tourCard} ${
                    selectedTour?.id === tour.id ? styles.active : ""
                  }`}
                  onClick={() =>
                    setSelectedTour(selectedTour?.id === tour.id ? null : tour)
                  }
                >

                  <div className={styles.photoWrapper}>
                    {tour.photos?.[0]?.url
                      ? (
                        <img
                          className={styles.photo}
                          src={tour.photos[0].url}
                          alt={tour.title}
                        />
                      )
                      : (
                        <div className={styles.noPhoto}>
                          No Image
                        </div>
                      )}
                  </div>

                  <div className={styles.info}>
                    <h3>
                      {tour.title}
                    </h3>
                    <p className={styles.guide}>
                      {tour.guide?.user
                        ? `${tour.guide.user.firstName} ${tour.guide.user.lastName}`
                        : "—"}
                    </p>
                  </div>
                </div>
              ))
            )
            : (
              <p>
                No tours found
              </p>
            )}
        </div>
      </div>
    </Container>
  );
}
