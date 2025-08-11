import {Navigate, useParams} from "react-router-dom";
import {ArticleFull} from "src/features/articles/ArticleFull";
import {articles} from "src/features/articles/articles.data";

export function ArticlePage() {
  const {slug} = useParams();
  const a = articles.find(x => x.slug === slug);
  if (!a) {
    return (
      <Navigate
        to="/articles"
        replace
      />
    );
  }

  return <ArticleFull a={a} />;
}
