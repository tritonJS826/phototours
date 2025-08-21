import {useEffect, useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getTour} from "src/api/tours";
import {Container} from "src/components/Container/Container";
import {Select} from "src/components/Select/Select";
import type {TourView} from "src/types/tour";
import styles from "src/pages/tourDetailsPage/TourDetailsPage.module.scss";

const ONE = 1;

function splitToParagraphs(text: string) {
  return text.split(/\n{2,}/g).map(s => s.trim()).filter(Boolean);
}

export function TourDetailsPage() {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [tour, setTour] = useState<TourView | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Missing tour id");
      setLoading(false);

      return;
    }
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const t = await getTour(id);
        if (!alive) {
          return;
        }
        setTour(t);
        document.title = t.title || "Tour";
      } catch {
        if (!alive) {
          return;
        }
        setError("Tour not found");
      } finally {
        if (alive) {
          setLoading(false);
        }
      }
    })();

    return () => {
      alive = false;
    };
  }, [id]);

  if (loading) {
    return (
      <section className={styles.wrap}>
        <Container>
          <div className={styles.state}>
            Loading…
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.wrap}>
        <Container>
          <div className={styles.state}>
            {error}
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => navigate("/tours")}
            >
              Back to all tours
            </button>
          </div>
        </Container>
      </section>
    );
  }

  if (!tour) {
    return (
      <section className={styles.wrap}>
        <Container>
          <div className={styles.state}>
            No data
          </div>
        </Container>
      </section>
    );
  }

  const cover = tour.coverUrl || tour.photos?.[0] || "";
  const paragraphs = useMemo(
    () => splitToParagraphs(tour.description || ""),
    [tour.description],
  );
  const priceText = Number(tour.price || 0).toLocaleString();

  return (
    <section className={styles.wrap}>
      <Container>
        <h1 className={styles.title}>
          {tour.title}
        </h1>

        {cover && (
          <img
            className={styles.hero}
            src={cover}
            alt={tour.title}
          />
        )}

        <div className={styles.grid}>
          <div className={styles.main}>
            <div className={styles.meta}>
              {tour.durationDays && (
                <div className={styles.metaItem}>
                  <b>
                    Duration:
                  </b>
                  {" "}
                  {tour.durationDays}
                  {" "}
                  days
                </div>
              )}
              {tour.difficulty && (
                <div className={styles.metaItem}>
                  <b>
                    Difficulty:
                  </b>
                  {" "}
                  {tour.difficulty}
                </div>
              )}
              {tour.startLocation && (
                <div className={styles.metaItem}>
                  <b>
                    Start:
                  </b>
                  {" "}
                  {tour.startLocation}
                </div>
              )}
              {tour.endLocation && (
                <div className={styles.metaItem}>
                  <b>
                    End:
                  </b>
                  {" "}
                  {tour.endLocation}
                </div>
              )}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                Description
              </h3>
              {paragraphs.length
                ? (
                  paragraphs.map((p, i) => (
                    <p
                      key={`p-${i + ONE}`}
                      className={styles.paragraph}
                    >
                      {p}
                    </p>
                  ))
                )
                : (
                  <p className={styles.paragraph}>
                    {tour.description}
                  </p>
                )}
            </div>

            {!!tour.activities?.length && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  Activities
                </h3>
                <ul className={styles.bullets}>
                  {tour.activities.map((a, i) => (
                    <li key={`act-${i + ONE}`}>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!!tour.included?.length && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  Included
                </h3>
                <ul className={styles.bullets}>
                  {tour.included.map((a, i) => (
                    <li key={`inc-${i + ONE}`}>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tour.photos && tour.photos.length > 0 && (
              <div className={styles.gallery}>
                {tour.photos.map((photo: string | { url?: string }, i) => {
                  const index = i + ONE;

                  let src = "";
                  if (typeof photo === "string") {
                    src = photo;
                  } else if (photo && typeof photo === "object") {
                    // Если приходит объект { url }
                    src = photo.url ?? "";
                  }

                  if (!src) {
                    return null;
                  }

                  return (
                    <img
                      key={`${tour.id}-photo-${index}`}
                      className={styles.image}
                      src={src}
                      alt={`${tour.title || "Tour"} ${index}`}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            )}

          </div>

          <aside className={styles.sidebar}>
            <div className={styles.priceBox}>
              <span className={styles.priceFrom}>
                From
              </span>
              <span className={styles.priceValue}>
                {priceText}
              </span>
              <span className={styles.priceCurrency}>
                USD
              </span>
            </div>

            {!!tour.dates?.length && (
              <div className={styles.selectBox}>
                <Select
                  label="Select date"
                  placeholder="Choose a date"
                  options={tour.dates.map(d => ({value: d, label: d}))}
                />
              </div>
            )}

            <button className={styles.cta}>
              Continue Now
            </button>
          </aside>
        </div>
      </Container>
    </section>
  );
}
