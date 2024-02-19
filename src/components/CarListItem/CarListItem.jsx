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

  // const dispatch = useDispatch();
  // const favorites = useSelector(selectFavorites);

  // const isLiked =
  //   favorites.length && favorites.find((favorite) => favorite.id === car.id);

  // useEffect(() => {
  //   isLiked ? setLike(true) : setLike(false);
  // }, [isLiked]);

  // const onFavoriteToggle = () => {
  //   !isLiked
  //     ? dispatch(addToFavorites(car))
  //     : dispatch(removeFromFavorites(car.id));
  //   setLike(!like);
  // };
  return (
    <>
      <div class={css.itemCard}>
        <div>
          <FavoriteIcon data={car} />
        </div>
        <img class={css.itemImg} src={car.img} alt={car.make} />
        <div class={css.btnAddFavorite}>
          {/* <button className={css.btnAddFavorite} onClick={onFavoriteToggle}>
            {like ? (
              <img src={iconAddFavorites} alt="icon add" />
            ) : (
              <img src={iconRemoveFavorites} alt="icon remove" />
            )}
          </button> */}
        </div>
        <div class={css.itemTitle}>
          <div class={css.itemTitleInfo}>
            <p>{car.make}&nbsp;</p>
            <p class={css.itemModel}>{car.model},&nbsp;</p>
            <p>{car.year}</p>
          </div>
          <p class={css.itemTitlePrice}>{car.rentalPrice}</p>
        </div>
        <div class={css.itemInfo}>
          <ul class={css.infoContainer}>
            <li class={css.infoText}>{city}</li>
            <li class={css.infoText}>{country}</li>
            <li class={css.infoText}>{car.rentalCompany}</li>
            <li class={css.infoText}>{car.type}</li>
            <li class={css.infoText}>{car.model}</li>
            <li class={css.infoText}>{car.id}</li>
            <li class={css.infoText}>{functionalPart}</li>
          </ul>
        </div>
        <button class={css.buttonItem} onClick={handlModalOpen}>
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
