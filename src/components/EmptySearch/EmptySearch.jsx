import Container from "components/Container/Container";
import { Link } from "react-router-dom";

const EmptySearch = () => {
  return (
    <Container>
      <h1>
        Sorry, nothing was found, please back to{" "}
        <Link to="/caatalog">Catalog</Link>
      </h1>
    </Container>
  );
};
export default EmptySearch;
