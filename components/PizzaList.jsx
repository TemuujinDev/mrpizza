import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mr.Pizza #Амьдарлыг амттай болго</h1>
      <p className={styles.desc}>
        Танд ойрхон салбараас хамгийн хурдан хүргэлт. 
		<br /> Яг одоо захиалаарай! #mrpizza
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
