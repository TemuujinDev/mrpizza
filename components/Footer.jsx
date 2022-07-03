import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            ТАНД ОЙРХОН САЛБАРААС ХУРДАН ХҮРГЭЛТ.
			ҮНДЭСНИЙ ҮЙЛДВЭРЛЭГЧ #mrpizza
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Байршил</h1>
          <p className={styles.text}>
            / Төв салбар /
            <br /> 3-р хороолол Өргөө кино театрын
            <br /> зүүн хойн Mr Pizza
          </p>
          <p className={styles.text}>
            / Офицер салбар /
            <br /> Офицеруудын ордны зүүн талд
            <br /> Well Mart супермаркет
          </p>
          <p className={styles.text}>
            / 13 салбар /
            <br /> БЗД 6-р хороолол дунд зам
            <br /> дагуу Натур Захын зүүн талд
          </p>
          <p className={styles.text}>
            / 5 шар салбар /
            <br /> 5 шарын автобусны буудалын хойно
            <br /> Well mart супермаркет
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>АЖИЛЛАХ ЦАГ</h1>
          <p className={styles.text}>
            Хүргэлтийн цаг
            <br /> 24/7
          </p>
          <p className={styles.text}>
            Даваа - Бямба
            <br /> 19:00-00:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
