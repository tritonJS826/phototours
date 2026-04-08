import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {ArticleForm} from "src/components/ArticleForm/ArticleForm";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import {PATHS} from "src/routes/routes";
import {AdminArticle, CreateArticleData, getAdminArticle, updateArticle} from "src/services/articlesService";
import styles from "src/pages/adminArticles/AdminArticles.module.scss";

export function EditArticle() {
  const [article, setArticle] = useState<AdminArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();

  useEffect(() => {
    const loadArticle = async () => {
      if (!id) {
        navigate(PATHS.ADMIN_ARTICLES);

        return;
      }

      setIsLoading(true);
      setError("");
      try {
        const response = await getAdminArticle(id);
        setArticle(response);
      } catch (err: any) {
        setError(err.message || "Failed to load article");
        navigate(PATHS.ADMIN_ARTICLES);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticle();
  }, [id, navigate]);

  const handleSave = async (formData: CreateArticleData) => {
    if (!id) {
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      await updateArticle(id, formData);
      navigate(PATHS.ADMIN_ARTICLES);
    } catch (err: any) {
      setError(err.message || "Failed to update article");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>
              Loading Article...
            </h2>
          </div>
        </div>
      </Container>
    );
  }

  if (!article) {
    return (
      <Container>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>
              Article Not Found
            </h2>
            <div className={styles.topActions}>
              <Button
                variant="outline"
                onClick={() => navigate(PATHS.ADMIN_ARTICLES)}
                type="button"
              >
                Back to Articles
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Edit Article
          </h2>
          <div className={styles.topActions}>
            <Button
              variant="outline"
              onClick={() => navigate(PATHS.ADMIN_ARTICLES)}
              type="button"
            >
              Back to Articles
            </Button>
          </div>
        </div>

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <ArticleForm
          onSave={handleSave}
          initialData={article}
        />
      </div>
    </Container>
  );
}
