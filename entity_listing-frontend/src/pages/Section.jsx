import { Link } from "react-router-dom";

export const Section = () => {
  return (
    <>
      <h1>Choose a section to begin</h1>
      <ul>
        <li>
          <Link to="/section/Men">Men Product</Link>
        </li>
        <li>
          <Link to="/section/Women">Women Product</Link>
        </li>
      </ul>
    </>
  );
};
