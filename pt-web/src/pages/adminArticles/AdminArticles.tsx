import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import {buildPath, PATHS} from "src/routes/routes";
import {AdminArticle, deleteArticle, listAdminArticles} from "src/services/articlesService";
import styles from "src/pages/adminArticles/AdminArticles.module.scss";

export function AdminArticles() {
  const [articles, setArticles] = useState<AdminArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<AdminArticle | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    listAdminArticles()
      .then((data) => setArticles(data))
      .catch((err) => setError("Failed to load articles: " + err.message));
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) {
      return;
    }
    try {
      await deleteArticle(id);
      setArticles((prev) => prev.filter((a) => a.id !== id));
      setSelectedArticle(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const filteredArticles = articles?.filter((article) => {
    const titleMatch = article.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const slugMatch = article.slug?.toLowerCase().includes(searchTerm.toLowerCase());
    const authorMatch = article.author?.toLowerCase().includes(searchTerm.toLowerCase()) || false;

    return titleMatch || slugMatch || authorMatch;
  });

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Articles Management
          </h2>

          <div className={styles.topActions}>
            <Button
              variant="primary"
              onClick={() => navigate(PATHS.ADMIN_CREATE_ARTICLE)}
              type="button"
            >
              + Create Article
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate(PATHS.ADMIN)}
              type="button"
            >
              Back to Dashboard
            </Button>
          </div>

          <div className={styles.searchRow}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search articles by title, slug, or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.inlineActions}>
              {selectedArticle && (
                <>
                  <Button
                    variant="primary"
                    onClick={() => navigate(buildPath.adminEditArticle(selectedArticle.id))}
                    type="button"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => handleDelete(selectedArticle.id)}
                    type="button"
                  >
                    Delete
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={styles.articleGrid}>
          {filteredArticles.length > 0
            ? (
              filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className={`${styles.articleCard} ${selectedArticle?.id === article.id ? styles.active : ""}`}
                  onClick={() =>
                    setSelectedArticle(selectedArticle?.id === article.id ? null : article)
                  }
                >
                  <div className={styles.photoWrapper}>
                    {article.coverUrl
                      ? (
                        <img
                          className={styles.photo}
                          src={article.coverUrl}
                          alt={article.title || "Article cover"}
                        />
                      )
                      : (
                        <div className={styles.noPhoto}>
                          No Image
                        </div>
                      )}
                  </div>

                  <div className={styles.info}>
                    <h3 className={styles.title}>
                      {article.title}
                    </h3>
                    <div className={styles.meta}>
                      <span>
                        {article.author || "Anonymous"}
                      </span>
                      <span>
                        ・
                      </span>
                      <span>
                        {new Date(article.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className={styles.excerpt}>
                      {article.excerpt}
                    </p>
                    {article.featured && (
                      <span className={styles.featuredBadge}>
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              ))
            )
            : (
              <p className={styles.noArticles}>
                No articles found
              </p>
            )}
        </div>
      </div>
    </Container>
  );
}
