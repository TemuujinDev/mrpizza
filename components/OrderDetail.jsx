import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Захиалга баталгаажсаны дараа бид залгах болно.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Бүтэн нэр*</label>
          <input
            placeholder="Болд Бат"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Утасны дугаар*</label>
          <input
            type="text"
            placeholder="+99889988"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Хаяг*</label>
          <textarea
            rows={5}
            placeholder="Баянзүрх дүүрэг, 16-р хороолол, Цэцэг Хотхон, 1р орц, 4 давхар, 20 тоот"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Захиалах
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
