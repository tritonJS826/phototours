import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ArticleForm} from "src/components/ArticleForm/ArticleForm";
import {Button} from "src/components/Button/Button";
import {Container} from "src/components/Container/Container";
import {PATHS} from "src/routes/routes";
import {createArticle, CreateArticleData} from "src/services/articlesService";
import styles from "src/pages/adminArticles/AdminArticles.module.scss";

export function CreateArticle() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleSave = async (formData: CreateArticleData) => {
    setIsLoading(true);
    setError("");
    try {
      await createArticle(formData);
      navigate(PATHS.ADMIN_ARTICLES);
    } catch (err: any) {
      setError(err.message || "Failed to create article");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            Create Article
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

        <ArticleForm onSave={handleSave} />
      </div>
    </Container>
  );
}
