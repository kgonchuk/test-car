import { useState } from "react";
import css from "./CarListItem.module.css";
import Modal from "components/Modal/Modal";
import FavoriteIcon from "components/FavoriteIcon/FavoriteIcon";

const CarListItem = ({ car }) => {
  const [openModal, setOpenModal] = useState(false);

  const addressParts = car.address.split(", ");
  const city = addressParts[addressParts.length - 2];
  const country = addressParts[addressParts.length - 1];
  const formattedAddress = `${city} | ${country} |`;

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
      {/* <div className={css.itemCard}>
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
            <li className={css.infoText}>{car.accessories[2]}</li>
          </ul>
        </div>
      </div> */}
      <div className={css.itemCard}>
        <div className={css.wrapperFoto}>
          <img
            className={css.itemImg}
            src={car.img}
            alt={car.make}
            loading="lazy"
          />
          <div>
            <FavoriteIcon data={car} />
          </div>
        </div>
        <div className={css.wrapper}>
          <div className={css.wrap}>
            {car.make}
            <span className={css.wrapperModel}>{car.model}, </span>
            {car.year}
          </div>
          <div>{car.rentalPrice}</div>
        </div>

        <p className={css.text}>
          {formattedAddress} {car.rentalCompany}
        </p>
        <p className={css.text}>
          {car.type} | {car.model} | {car.id} | {car.accessories[0]}
        </p>
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
