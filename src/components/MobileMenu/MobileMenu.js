import css from "./MobileMenu.module.css";
import closeBtn from "../../assets/images/closeBtn.svg";
import { useEffect } from "react";
import Navigation from "components/Layot/Navigation/Navigation";
const MobileMenu = ({ closeMobileModal }) => {
  useEffect(() => {
    const handleClick = (e) => {
      if (e.code === "Escape") {
        closeMobileModal();
      }
    };
    window.addEventListener("keydown", handleClick);
    return () => {
      window.removeEventListener("keydown", handleClick);
    };
  }, [closeMobileModal]);

  const overlayClick = (e) => {
    if (e.currentTarget === e.target) {
      closeMobileModal();
    }
  };

  return (
    <div className={css.overlay} onClick={overlayClick}>
      <div className={css.mobileContainer} onClick={closeMobileModal}>
        <button className={css.closeBtn}>
          <img src={closeBtn} alt="close" width={14} height={14} />
        </button>
        <div className={css.visionWraper}>
          <Navigation />
          <ul className={css.list}>
            <li>
              <a href="#" className={css.link}>
                About us
              </a>
            </li>
            <li>
              <a href="#" className={css.link}>
                Price
              </a>
            </li>
            <li>
              <a href="#" className={css.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
