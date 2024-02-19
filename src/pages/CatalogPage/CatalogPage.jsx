// import css from "./CatalogPage.module.css";
// import CarList from "../../components/CarList/CarList";
// // import Filter from "../../components/Filter/Filter";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { fetchAllCars, fetchCars } from "../../redux/operations";
// import Filter from "../../components/Filter/Filter";
// import {
//   selectAdverts,
//   selectBrand,
//   selectCarsFilter,
//   selectMileageFrom,
//   selectMileageTo,
//   selectOnFilter,
//   selectPrice,
// } from "../../redux/selector";
// import LoadMore from "components/Button/LoadMore";
// import { getFilteredCars } from "helpers/filteredCard";
// import { clearCarsList } from "../../redux/carSlice";
import css from "./CatalogPage.module.css";
import { getFilteredCars } from "../../helpers/filteredCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCars, fetchCars } from "../../redux/operations";
import {
  selectAdverts,
  selectBrand,
  selectCarsFilter,
  selectError,
  selectIsLoading,
  selectMileageFrom,
  selectMileageTo,
  selectOnFilter,
  selectPrice,
} from "../../redux/selector";
import { clearCarsData } from "../../redux/carSlice";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import LoadMore from "../../components/Button/LoadMore";
import Container from "../../components/Container/Container";

const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allCars = useSelector(selectAdverts);
  const onFilter = useSelector(selectOnFilter);
  const brandFilter = useSelector(selectBrand);
  const allCarsForFilter = useSelector(selectCarsFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);
  const priceFilter = useSelector(selectPrice);
  const [page, setPage] = useState(1);

  const totalPage = 3;

  // useEffect(() => {
  //   const height = 426;
  //   if (allCars.length > 12) {
  //     window.scrollBy({
  //       top: height * 1.3,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [allCars]);

  useEffect(() => {
    dispatch(clearCarsData());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };
  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (onFilter) {
      dispatch(fetchAllCars());
    }
  }, [dispatch, onFilter]);

  const filteredCars = getFilteredCars(
    allCarsForFilter,
    brandFilter,
    priceFilter,
    mileageFrom,
    mileageTo
  );

  const combinedCars = onFilter ? filteredCars : allCars;
  return (
    <Container>
      <div className={css.container}>
        <Filter />
        {/* 
      {isLoading && !error && <Loader />} */}
        <CarList cars={combinedCars} />

        {page < totalPage && (
          <LoadMore onFindMore={handleLoadMoreClick}>Load more</LoadMore>
        )}
      </div>
    </Container>
  );
};

export default Catalog;
