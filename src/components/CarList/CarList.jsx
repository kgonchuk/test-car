import { nanoid } from "nanoid";
import css from "./CarList.module.css";
import CarListItem from "components/CarListItem/CarListItem";

const CarList = ({ cars }) => {
  return (
    <div className={css.carListWrap}>
      <ul className={css.listContainer}>
        {cars.map((car) => (
          <li className={css.listItem} key={nanoid()}>
            <CarListItem car={car} key={car.id} />
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};
export default CarList;
