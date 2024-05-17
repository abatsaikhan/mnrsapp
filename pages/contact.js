import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle} />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle} />
      <h1 className={style.title}>ХОЛБОО БАРИХ</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Нэр" />
        <input className={style.inputS} type="text" placeholder="Утас" />
        <input className={style.inputL} type="text" placeholder="Email" />
        <input className={style.inputL} type="text" placeholder="Гарчиг" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Агуулга"
        />
        <button className={style.button}>ИЛГЭЭХ</button>
      </form>
    </div>
  );
};

export default Contact;