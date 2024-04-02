import Navigation from "../Navigation/Navigation";
import logo from "../../../img/logo.png";

import css from "./AppBar.module.css";
import Container from "components/Container/Container";
import { ReactComponent as MenuIcon } from "../../../img/menu.svg";
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
        </div>
        <button onClick={handleShowModal} className={css.menuButton}>
          <MenuIcon width={30} height={30} />
        </button>
      </header>
      {isShowModal && <MobileMenu closeMobileModal={handleShowModal} />}
    </Container>
  );
};
export default AppBar;
