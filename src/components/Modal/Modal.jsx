import closeBtn from "../../assets/images/closeBtn.svg";
import css from "./Modal.module.css";
const Modal = ({ closeModal, car }) => {
  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];
  const rentalConditionsSplitted = car.rentalConditions.split("\n", 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className={css.overlay} onClick={overlayClick}>
      <div className={css.modalContainer}>
        <img src={car.img} alt="" width="264" className={css.imgCar} />
        <button className={css.closeBtn} onClick={closeModal}>
          <img src={closeBtn} alt="close" width={14} height={14} />
        </button>
        <div className={css.itemTitle}>
          <div className={css.carTitle}>
            <h2>{car.make}&nbsp;</h2>
            <h2 className={css.itemModel}>
              <span>{car.model},&nbsp;</span>
            </h2>
            <h2>{car.year}</h2>
          </div>
        </div>
        <div className={css.SecondaryInfo}>
          <div className={css.SecondaryCarText}>{city}</div>
          <div className={css.SecondaryCarText}>{country}</div>
          <div className={css.SecondaryCarText}>Id:{car.id}</div>
          <div className={css.SecondaryCarText}>Year:{car.year}</div>
          <div className={css.SecondaryCarText}>Type:{car.type}</div>
          <div className={css.SecondaryCarText}>
            Fuel Consumption:{car.fuelConsumption}
          </div>
          <div className={css.SecondaryCarText}>
            Engine Size:{car.engineSize}
          </div>
        </div>
        <div className={css.modalDescription}>{car.description}</div>
        <div className={css.Accessories}>
          <div className={css.AccessoriesTitle}>
            Accessories and functionalities:
          </div>
          <ul className={css.AccessoryList}>
            {car.accessories.map((accessory, index) => (
              <li key={index} className={css.AccessoryListItem}>
                {accessory}
              </li>
            ))}
            {car.functionalities.map((functionality, index) => (
              <li key={index} className={css.AccessoryListItem}>
                {functionality}
              </li>
            ))}
          </ul>
        </div>
        <div className={css.RentalBlock}>
          <div className={css.conditionListTitle}>Rental Conditions:</div>
          <div className={css.AccessoriesList}>
            <div className={css.conditionList}>
              Minimum age: <span>{number}</span>
            </div>
            <div className={css.conditionList}>
              {" "}
              {rentalConditionsSplitted[1]}
            </div>
            <div className={css.conditionList}>
              {" "}
              {rentalConditionsSplitted[2]}
            </div>
            <div className={css.conditionList}>
              Mileage: <span>{car.mileage}</span>
            </div>
            <div className={css.conditionList}>
              Price: <span>{car.rentalPrice}</span>
            </div>
          </div>
        </div>
        <button className={css.btnContainer}>
          <a href="tel:+380730000000" className={css.RentalButton}>
            Rental car
          </a>
        </button>
      </div>
    </div>
  );
};
export default Modal;
