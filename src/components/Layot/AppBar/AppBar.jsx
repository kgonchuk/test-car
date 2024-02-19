import Navigation from "../Navigation/Navigation";
import logo from "../../../img/logo.png";

import css from "./AppBar.module.css";
import Container from "components/Container/Container";
import { ReactComponent as MenuIcon } from "../../../img/menu-3.svg";
import { useState } from "react";
import MobileMenu from "components/MobileMenu/MobileMenu";

const AppBar = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = () => {
    setIsShowModal(!isShowModal);
  };
  return (
    <Container>
      <header className={css.headerContainer}>
        <img src={logo} alt="logo" />
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
        <div className={css.mobileMenu}>
          <button className={css.burgerBtn} onClick={handleShowModal}>
            <MenuIcon width={30} height={30} className={css.burgerIcon} />
          </button>
        </div>
      </header>
      {isShowModal && <MobileMenu closeMobileModal={handleShowModal} />}
    </Container>
  );
};
export default AppBar;
