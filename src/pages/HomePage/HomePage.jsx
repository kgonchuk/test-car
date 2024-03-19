import React from "react";
import css from "./HomePage.module.css";
import Container from "components/Container/Container";

const HomePage = () => {
  return (
    <Container>
      <article className={css.backgroundImg}>
        <h1 className={css.hetoTittle}>Car to rent in Ukraine</h1>
        <p className={css.heroText}>
          Сar rental and rental with and without driver
        </p>
        <div className={css.heroListContainer}>
          <ul className={css.heroList}>
            <li className={css.heroListItem}>
              <p className={css.heroItemText}>Large fleet of cars available</p>
            </li>
            <li className={css.heroListItem}>
              <p className={css.heroItemText}>
                Car delivery to your geolocation
              </p>
            </li>
            <li className={css.heroListItem}>
              <p className={css.heroItemText}>
                Discounts for regular customers
              </p>
            </li>
            <li className={css.heroListItem}>
              <p className={css.heroItemText}>Any form of payment</p>
            </li>
            <li className={css.heroListItem}>
              <p className={css.heroItemText}>Any form of payment</p>
            </li>
          </ul>
        </div>
      </article>
    </Container>
  );
};

export default HomePage;
