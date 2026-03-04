import {useState} from "react";
import copyUrlIcon from "/images/copyUrlIcon.svg";
import {Breadcrumbs} from "src/components/Breadcrumbs/Breadcrumbs";
import {Toast} from "src/components/Toast/Toast";
import {PATHS} from "src/routes/routes";
import type {Article, ArticleBlock} from "src/types/article";
import {formatDateToMonthDay} from "src/utils/dateUtils";
import styles from "src/components/Articles/ArticleFull/ArticleFull.module.scss";

type Props = { article: Article };

const TEXT_KEY_LAST_SYMBOLS = 20;

function renderBlock(block: ArticleBlock) {
  switch (block.type) {
    case "image":
      return (
        <figure
          key={block.src}
          className={styles.blockImage}
        >
          <img
            src={block.src}
            alt={block.alt ?? ""}
            loading="lazy"
          />
          {block.alt && <figcaption>
            {block.alt}
          </figcaption>}
        </figure>
      );
    case "title":
      return (
        <h3
          key={block.content}
          className={styles.blockTitle}
        >
          {block.content}
        </h3>
      );
    case "text":
      return (
        <div
          key={block.content.slice(0, TEXT_KEY_LAST_SYMBOLS)}
          className={styles.blockText}
          dangerouslySetInnerHTML={{__html: block.content.replace(/\n/g, "<br/>")}}
        />
      );
    case "separator":
      return (
        <hr
          key={block.type}
          className={styles.blockSeparator}
        />
      );
    default:
      return null;
  }
}

function renderContent(article: Article) {
  if (article.blocks && article.blocks.length > 0) {
    return (
      <div className={styles.blocks}>
        {article.blocks.map(renderBlock)}
      </div>
    );
  }

  return (
    <div
      className={styles.fullBody}
      dangerouslySetInnerHTML={{__html: article.content}}
    />
  );
}

export function ArticleFull({article}: Props) {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    await navigator.clipboard.writeText(url);
    setShowToast(true);
  };

  const breadcrumbs = [
    {label: "Home", href: PATHS.HOME},
    {label: "Blog", href: PATHS.ARTICLES},
    {label: article.title},
  ];

  return (
    <article className={styles.fullArt}>
      <div className={styles.fullPict}>
        <Breadcrumbs items={breadcrumbs} />

        <p className={styles.createdAt}>
          <div className={styles.createdAtIcon} />
          {formatDateToMonthDay(article.publishedAt)}
        </p>
        <img
          src={article.coverUrl}
          alt={article.alt ?? article.title}
          className={styles.fullImg}
          loading="eager"
        />
      </div>

      <div className={styles.fullText}>

        <h2 className={styles.fullTitle}>
          {article.title}
        </h2>

        {renderContent(article)}

        <div className={styles.actions}>
          <button
            className={styles.copyLinkButton}
            onClick={handleShare}
            aria-label="Copy link"
          >
            <img
              src={copyUrlIcon}
              alt="Copy link"
            />
          </button>

        </div>
      </div>

      <Toast
        message="Link copied to clipboard!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </article>
  );
}
