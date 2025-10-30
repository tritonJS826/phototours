import {useEffect, useState} from "react";
import {BestTravelTips} from "src/components/BestTravelTips/BestTravelTips";
import {ARTICLES_SHOWCASE_LIMIT, listArticles} from "src/services/articlesService";
import type {ArticleSummary} from "src/types/article";

interface ArticlesShowcaseProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function ArticlesShowcase({title, subtitle, className}: ArticlesShowcaseProps) {
  const [items, setItems] = useState<ArticleSummary[]>([]);

  useEffect(() => {
    let mounted = true;
    listArticles(ARTICLES_SHOWCASE_LIMIT)
      .then(data => {
        if (mounted) {
          setItems(data ?? []);
        }
      })
      .catch(() => {
        if (mounted) {
          setItems([]);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  if (!items.length) {
    return null;
  }

  return (
    <BestTravelTips
      items={items}
      title={title}
      subtitle={subtitle}
      className={className}
    />
  );
}
