import style from "./MainHeader.module.css";

import { Link } from "react-router-dom";

export const Mainheader = () => {
  return (
    <>
      <div className={style.header}>
        <div className={style.routediv}>
          <Link to="/">Welcome</Link>
          <Link to="/section">Section</Link>
        </div>
      </div>
    </>
  );
};
