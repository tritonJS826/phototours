import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {listArticles} from "src/api/articles";
import type {ArticleSummary} from "src/types/article";

export function ArticlesPage() {
  const [items, setItems] = useState<ArticleSummary[]>([]);

  useEffect(() => {
    listArticles()
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <main>
      <div className="container">
        {items.map((a) => (
          <article
            key={a.id}
            style={{display: "flex", gap: 24, margin: "24px 0"}}
          >
            <Link to={`/articles/${a.slug}`}>
              <img
                src={a.coverUrl}
                alt={a.alt ?? a.title}
                width={240}
                height={160}
              />
              <h3>
                {a.title}
              </h3>
              <p>
                {a.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
