import css from "./Filter.module.css";
import { priceData, modelData } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectBrand, selectPrice } from "../../redux/selector";
import { setValueFilter } from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const brandFilter = useSelector(selectBrand);
  const priceFilter = useSelector(selectPrice);

  const [selectedBrand, setSelectedBrand] = useState(
    brandFilter ? brandFilter : "Enter the text"
  );

  const [selectedPrice, setSelectedPrice] = useState(
    priceFilter ? priceFilter : "To $"
  );

  const [selectedFromMileage, setSelectedFromMileage] = useState("");
  const [selectedToMileage, setSelectToMileage] = useState("");
  const [isShownSelectBrand, setIsShownSelectBrand] = useState(false);
  const [isShownSelectPrice, setIsShownSelectPrice] = useState(false);

  const handleShownSelectedBrand = (e) => {
    e.preventDefault();
    setIsShownSelectBrand((prev) => !prev);
  };
  const handleShownSelectedPrice = (e) => {
    e.preventDefault();
    setIsShownSelectPrice((prev) => !prev);
  };
  const changeBrand = (brand) => {
    setSelectedBrand(brand);
    setIsShownSelectBrand(false);
  };

  const changePrice = (price) => {
    setSelectedPrice(price);
    setIsShownSelectPrice(false);
  };
  const handleInputChangeFrom = (e) => {
    const { value } = e.target;
    setSelectedFromMileage(value.replace(/,/g, ""));
  };
  const handleInputChangeTo = (e) => {
    const { value } = e.target;
    setSelectToMileage(value.replace(/,/g, ""));
  };
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    if (
      selectedBrand === "Enter the text" &&
      selectedPrice === "To $" &&
      !selectedFromMileage &&
      !selectedToMileage
    ) {
      return;
    }
    const data = {
      brand: selectedBrand === "Enter the text" ? "" : selectedBrand,
      price: selectedPrice === "To $" ? "" : `$${parseInt(selectedPrice, 10)}`,
      mileageFrom: selectedFromMileage.trim(),
      mileageTo: selectedToMileage.trim(),
      onFilter: true,
    };
    dispatch(setValueFilter(data));
  };

  const handleFilterClear = (e) => {
    e.preventDefault();
    const data = {
      brand: "",
      price: "",
      mileageFrom: "",
      mileageTo: "",
      onFilter: false,
    };

    dispatch(setValueFilter(data));
    setSelectedBrand("Enter the text");
    setSelectedPrice("To $");
    setSelectedFromMileage("");
    setSelectToMileage("");
  };

  return (
    <form className={css.searchForm}>
      <div className={css.dropDown}>
        <p className={css.dropDownTitle}>Car brand</p>
        <button
          className={css.dropDownButton}
          onClick={handleShownSelectedBrand}
        >
          {selectedBrand}
        </button>
        <ul
          className={
            isShownSelectBrand ? css.dropDownListVisiable : css.dropDownList
          }
        >
          {modelData.map((model) => (
            <li
              onClick={() => changeBrand(model)}
              className={css.dropDownListItem}
              key={model}
            >
              {model}
            </li>
          ))}
        </ul>
      </div>

      <div className={css.dropDown}>
        <p className={css.dropDownTitle}>Price / 1 hour</p>
        <button
          className={css.dropDownButtonPrice}
          onClick={handleShownSelectedPrice}
        >
          {selectedPrice}
        </button>
        <ul
          className={
            isShownSelectPrice
              ? css.dropDownListPriceVisiable
              : css.dropDownListPrice
          }
        >
          {priceData.map((price) => (
            <li
              onClick={() => changePrice(price)}
              className={css.dropDownListItem}
              key={price}
            >
              {price}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className={css.mileageTitle}>Сar mileage / km</p>
        <div className={css.inputBlock}>
          <div className={css.inputWrapper}>
            <input
              type="text"
              onChange={handleInputChangeFrom}
              className={css.inputFrom}
              // value={selectedFromMileage}
              placeholder="From"
            />
          </div>
          <div className={css.inputWrapper}>
            <input
              type="text"
              onChange={handleInputChangeTo}
              className={css.inputTo}
              placeholder="To"
              // value={selectedToMileage}
            />
          </div>
        </div>
      </div>

      <div className={css.btnWrap}>
        <button
          type="button"
          onClick={handleFilterSubmit}
          className={css.filterBtn}
        >
          Search
        </button>
        <button
          type="button"
          onClick={handleFilterClear}
          className={css.filterBtn}
        >
          Reset
        </button>
      </div>
    </form>
  );
};
export default Filter;
