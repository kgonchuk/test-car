import React from "react";
import css from "./HomePage.module.css";
import Container from "components/Container/Container";
import number1 from "../../img/1.svg";

const HomePage = () => {
  return (
    <Container>
      <article className={css.backgroundImg}>
        <h1 class={css.hetoTittle}>Car to rent in Ukrain</h1>
        <p class={css.heroText}>
          Сar rental and rental with and without driver
        </p>
        <div claass={css.heroListContainer}>
          <ul class={css.heroList}>
            <li class={css.heroListItem}>
              <svg>
                <use>
                  <img src="../../img/symbol-defs.svg#icon-number2" alt="" />
                </use>
              </svg>

              <p class={css.heroItemText}>Large fleet of cars available</p>
            </li>
            <li class={css.heroListItem}>
              <p class={css.heroItemText}>Car delivery to your geolocation</p>
            </li>
            <li class={css.heroListItem}>
              <p class={css.heroItemText}>Discounts for regular customers</p>
            </li>
            <li class={css.heroListItem}>
              <p class={css.heroItemText}>Any form of payment</p>
            </li>
            <li class={css.heroListItem}>
              <p class={css.heroItemText}>Any form of payment</p>
            </li>
          </ul>
        </div>
      </article>
    </Container>
  );
};

export default HomePage;
