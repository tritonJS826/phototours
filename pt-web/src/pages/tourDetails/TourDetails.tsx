import {useEffect, useMemo, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getTour} from "src/api/tours";
import {Container} from "src/components/Container/Container";
import {Select} from "src/components/Select/Select";
import type {TourView} from "src/types/tour";
import styles from "src/pages/tourDetails/TourDetails.module.scss";

function splitToParagraphs(text: string) {
  return text
    .split(/\n{2,}/g)
    .map(s => s.trim())
    .filter(Boolean);
}

export function TourDetailsPage() {
  const {id} = useParams<{ id: string }>();
  const nav = useNavigate();
  const [tour, setTour] = useState<TourView | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      try {
        const t = await getTour(id);
        setTour(t);
      } catch {
        nav("/tours");
      } finally {
        setLoading(false);
      }
    })();
  }, [id, nav]);

  if (loading) {
    return (
      <section className={styles.wrap}>
        Loading…
      </section>
    );
  }
  if (!tour) {
    return (
      <section className={styles.wrap}>
        Not found
      </section>
    );
  }

  const cover = tour.coverUrl || tour.photos[0];
  const paragraphs = useMemo(() => splitToParagraphs(tour.description || ""), [tour.description]);
  const priceText = Number(tour.price).toLocaleString();

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
              {tour.region && <div>
                <b>
                  Region:
                </b>
                {" "}
                {tour.region}
              </div>}
              {tour.durationDays && <div>
                <b>
                  Duration:
                </b>
                {" "}
                {tour.durationDays}
                {" "}
                days
              </div>}
              {tour.difficulty && <div>
                <b>
                  Difficulty:
                </b>
                {" "}
                {tour.difficulty}
              </div>}
              {tour.startLocation && <div>
                <b>
                  Start:
                </b>
                {" "}
                {tour.startLocation}
              </div>}
              {tour.endLocation && <div>
                <b>
                  End:
                </b>
                {" "}
                {tour.endLocation}
              </div>}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>
                Description
              </h3>
              {paragraphs.length
                ? (
                  paragraphs.map((p, i) => (
                    <p
                      key={i}
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

            {!!tour.dailyItinerary?.length && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  Daily itinerary
                </h3>
                {tour.dailyItinerary.map(d => (
                  <div
                    key={d.day}
                    className={styles.day}
                  >
                    <h4 className={styles.dayTitle}>
                      Day
                      {" "}
                      {d.day}
                      {d.title ? ` — ${d.title}` : ""}
                    </h4>
                    <p className={styles.paragraph}>
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {!!tour.activities?.length && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  Activities
                </h3>
                <ul className={styles.bullets}>
                  {tour.activities.map((a, i) => (<li key={i}>
                    {a}
                  </li>))}
                </ul>
              </div>
            )}

            {!!tour.included?.length && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>
                  Included
                </h3>
                <ul className={styles.bullets}>
                  {tour.included.map((a, i) => (<li key={i}>
                    {a}
                  </li>))}
                </ul>
              </div>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.priceBox}>
              <span className={styles.priceValue}>
                {priceText}
              </span>
              <span className={styles.priceCurrency}>
                USD
              </span>
            </div>

            {!!tour.dates.length && (
              <Select
                label="Select date"
                placeholder="Choose a date"
                options={tour.dates.map((d) => ({value: d, label: d}))}
                className={styles.selectBox}
              />
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
