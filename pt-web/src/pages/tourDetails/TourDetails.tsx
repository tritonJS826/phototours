import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {getTour} from "src/api/tours";
import {Container} from "src/components/Container/Container";
import type {TourView} from "src/types/tour";
import styles from "src/pages/tourDetails/TourDetails.module.scss";

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

  return (
    <section className={styles.wrap}>
      <Container>
        <h1>
          {tour.title}
        </h1>
        {cover &&
        <img
          className={styles.hero}
          src={cover}
          alt={tour.title}
        />
        }

        <div className={styles.grid}>
          <div>
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
              <h3>
                Description
              </h3>
              <p>
                {tour.description}
              </p>
            </div>

            {!!tour.dailyItinerary?.length && (
              <div className={styles.section}>
                <h3>
                  Daily itinerary
                </h3>
                {tour.dailyItinerary.map(d => (
                  <div
                    key={d.day}
                    style={{marginBottom: 16}}
                  >
                    <h4>
                      Day
                      {d.day}
                      {d.title ? ` — ${d.title}` : ""}
                    </h4>
                    <p>
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {!!tour.activities?.length && (
              <div className={styles.section}>
                <h3>
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
                <h3>
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
            <div style={{fontWeight: 700, fontSize: "1.25rem"}}>
              {tour.price.toLocaleString("en-US")}
              {" "}
              USD
            </div>
            {!!tour.dates.length && (
              <>
                <label style={{display: "block", marginTop: 12}}>
                  Select date
                </label>
                <select style={{width: "100%"}}>
                  {tour.dates.map((d) => (
                    <option
                      key={d}
                      value={d}
                    >
                      {d}
                    </option>))}
                </select>
              </>
            )}
            <button style={{marginTop: 12, width: "100%"}}>
              Continue Now
            </button>
          </aside>
        </div>
      </Container>
    </section>
  );
}
