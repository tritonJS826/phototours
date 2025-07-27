import s from './ButtonHello.module.scss';

export default function HelloButton() {
  const handleClick = () => alert("Hello!");

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Say Hello to Photo tours</h1>
      <p className={s.subtitle}>Please, click the button</p>
      <button className={s.buttonHello} onClick={handleClick}>Say Hello!</button>
    </div>
  );
}



