import {BlogCard} from "src/components/BlogCard/BlogCard";
import {Section} from "src/components/Section/Section";
import styles from "src/components/LatestPosts/LatestPosts.module.scss";

const posts = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Новые маршруты по Азии",
    date: "24.07.2025",
    excerpt: "Описание первой статьи...",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Отдых на Бали: советы",
    date: "20.07.2025",
    excerpt: "Описание второй статьи...",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "10 мест, которые нужно увидеть в Италии",
    date: "15.07.2025",
    excerpt: "Описание третьей статьи...",
  },
];

export function LatestPosts() {
  return (
    <Section title="Свежие статьи">
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            image={post.image}
            title={post.title}
            date={post.date}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </Section>
  );
}
