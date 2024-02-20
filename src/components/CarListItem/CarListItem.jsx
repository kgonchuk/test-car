import { useEffect, useState } from "react";
import css from "./CarListItem.module.css";
import Modal from "components/Modal/Modal";
import iconAddFavorites from "../../img/addHeart.svg";
import iconRemoveFavorites from "../../img/removeHeart.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selector";

import { addToFavorites, removeFromFavorites } from "../../redux/favoriteSlice";
import FavoriteIcon from "components/FavoriteIcon/FavoriteIcon";

const CarListItem = ({ car }) => {
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState(false);

  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];
  const functionalPart = car.functionalities[0];

  const handlModalOpen = () => {
    setOpenModal(true);
  };
  const hadleModalClose = () => {
    setOpenModal(false);
  };
  const handleModalCloseEsc = (e) => {
    if (e.code === "Escape") {
      hadleModalClose();
    }
  };
  window.addEventListener("keydown", handleModalCloseEsc);

  return (
    <>
      <div className={css.itemCard}>
        <div>
          <FavoriteIcon data={car} />
        </div>
        <img className={css.itemImg} src={car.img} alt={car.make} />
        <div className={css.btnAddFavorite}></div>
        <div className={css.itemTitle}>
          <div className={css.itemTitleInfo}>
            <p>{car.make}&nbsp;</p>
            <p className={css.itemModel}>{car.model},&nbsp;</p>
            <p>{car.year}</p>
          </div>
          <p className={css.itemTitlePrice}>{car.rentalPrice}</p>
        </div>
        <div className={css.itemInfo}>
          <ul className={css.infoContainer}>
            <li className={css.infoText}>{city}</li>
            <li className={css.infoText}>{country}</li>
            <li className={css.infoText}>{car.rentalCompany}</li>
            <li className={css.infoText}>{car.type}</li>
            <li className={css.infoText}>{car.model}</li>
            <li className={css.infoText}>{car.id}</li>
            <li className={css.infoText}>{functionalPart}</li>
          </ul>
        </div>
        <button className={css.buttonItem} onClick={handlModalOpen}>
          Learn More
        </button>
      </div>
      {openModal && (
        <Modal closeModal={hadleModalClose} car={car} key={car.id} />
      )}
    </>
  );
};
export default CarListItem;
