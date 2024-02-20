import CarListItem from "../../components/CarListItem/CarListItem";
import Container from "../../components/Container/Container";
import Filter from "components/Filter/Filter";
import { useSelector } from "react-redux";
import {
  selectFavorites,
  selectBrand,
  selectPrice,
  selectMileageFrom,
  selectMileageTo,
} from "../../redux/selector";
import { getFilteredCars } from "../../helpers/filteredCard";
import css from "./FavoritePage.module.css";
import EmptySearch from "components/Empty/EmptySearch";
import { nanoid } from "@reduxjs/toolkit";

const Favorites = () => {
  const favorite = useSelector(selectFavorites);
  const brandFilter = useSelector(selectBrand);
  const priceFilter = useSelector(selectPrice);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const filteredCars = getFilteredCars(
    favorite,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo
  );
  return (
    <Container>
      <section>
        {favorite.length === 0 ? (
          <EmptySearch />
        ) : (
          <div>
            <Filter />
            <ul className={css.carList}>
              {filteredCars.map((car) => (
                <li key={nanoid()}>
                  <CarListItem car={car} key={car.id} />
                </li>
              ))}
            </ul>
            {/* <ul className={css.carList}>
              {filteredCars.map((car) => (
                <CarListItem car={car} key={car.id} />
              ))}
            </ul> */}
          </div>
        )}
      </section>
    </Container>
  );
};
export default Favorites;
