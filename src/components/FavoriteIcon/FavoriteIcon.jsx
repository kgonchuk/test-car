import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/favoriteSlice";
import { selectFavorites } from "../../redux/selector";
import iconAdd from "../../img/addHeart.svg";
import iconDel from "../../img/removeHeart.svg";
import css from "./FavoriteIcon.module.css";

const FavoriteIcon = ({ data }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const handleAddFavorite = (data) => {
    if (!favorites.some((car) => car.id === data.id)) {
      dispatch(addToFavorites(data));
    } else {
      dispatch(removeFromFavorites(data));
    }
  };
  return (
    <div>
      <img
        className={css.favoriteimg}
        src={favorites.some((car) => car.id === data.id) ? iconAdd : iconDel}
        alt="Like"
        aria-label="Add to Favorites"
        onClick={() => handleAddFavorite(data)}
      />
    </div>
  );
};
export default FavoriteIcon;
