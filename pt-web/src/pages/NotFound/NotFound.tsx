import s from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>404 – Page not found</h1>
      <p className={s.text}>The page you’re looking for doesn’t exist.</p>
    </div>
  );
}