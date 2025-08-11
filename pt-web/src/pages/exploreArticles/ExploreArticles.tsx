import {Container} from "src/components/Container/Container";
import {ArticleCard} from "src/features/articles/ArticleCard";
import {articles} from "src/features/articles/articles.data";

export function ExploreArticles() {
  return (
    <main>
      <Container>
        <div className="grid">
          {articles.map(a => (<ArticleCard
            key={a.id}
            a={a}
          />))}
        </div>
      </Container>
    </main>
  );
}
