import { nanoid } from "nanoid";
// import { selectAdverts } from "../../redux/selector";
// import { useSelector } from "react-redux";
import css from "./CarList.module.css";
import CarListItem from "components/CarListItem/CarListItem";

const CarList = ({ cars }) => {
  // const cars = useSelector(selectAdverts);
  return (
    <div className={css.carListWrap}>
      <ul className={css.listContainer}>
        {cars.map((car) => (
          <li key={nanoid()}>
            <CarListItem car={car} key={car.id} />
          </li>
        ))}{" "}
      </ul>
    </div>
  );
};
export default CarList;
