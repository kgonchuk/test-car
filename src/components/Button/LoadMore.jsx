import css from "./LoadMore.module.css";
const LoadMore = ({ onFindMore }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={onFindMore}>
      Load more
    </button>
  );
};
export default LoadMore;