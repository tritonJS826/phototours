import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import {buildPath, PATHS} from "src/routes/routes";
import {fetchData} from "src/services/httpHelper";
import styles from "src/pages/adminPage/AdminPage.module.scss";

type Tour = {
  id: number;
  title: string;
  photos?: { id: number; url: string }[];
};

export function AdminPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData<Tour[]>("general/tours")
      .then((data) => setTours(data))
      .catch((err) => setError("Failed to load tours: " + err.message));
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this tour?")) {
      return;
    }
    try {
      await fetchData<void>(`general/tours/${id}`, {method: "DELETE"});
      setTours((prev) => prev.filter((t) => t.id !== id));
      setSelectedTour(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const filteredTours = tours?.filter((tour) => {
    const titleMatch = tour.title?.toLowerCase().includes(searchTerm.toLowerCase());

    return titleMatch;
  });

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Admin
          </h2>

          <div className={styles.topActions}>
            <Button
              variant="primary"
              onClick={() => navigate(PATHS.ADMIN_CREATE_TOUR)}
              type="button"
            >
              + Create Tour
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate(PATHS.ADMIN_USERS)}
              type="button"
            >
              Users & Photos
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate(PATHS.ADMIN)}
              type="button"
            >
              All Tours
            </Button>
          </div>

          <div className={styles.searchRow}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search tours or guides…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.inlineActions}>
              {selectedTour && (
                <>
                  <Button
                    variant="primary"
                    onClick={() => navigate(buildPath.adminEditTour(selectedTour.id))}
                    type="button"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleDelete(selectedTour.id)}
                    type="button"
                  >
                    Delete
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.tourGrid}>
          {filteredTours.length > 0
            ? (
              filteredTours.map((tour) => (
                <div
                  key={tour.id}
                  className={`${styles.tourCard} ${selectedTour?.id === tour.id ? styles.active : ""}`}
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
