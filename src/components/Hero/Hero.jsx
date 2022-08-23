import style from "./Hero.module.scss";
import "./../../App.scss";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.info}>
          <div className={style.title}>
            <div className={style.year}>2022</div>
            <h1>Autumn Collection</h1>
          </div>
          <div>
            <button className={style.btn_shop}>Shop now</button>
            <button className={style.readmore}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
