import style from "./Details.module.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const Details = () => {
  const params = useParams();
  const category = params.category;
  const [data, setData] = useState([]);
  console.log(category);

  const getData = () => {
    axios
      .get(`http://localhost:5000/product?category=${category}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      });
  };
  useState(() => {
    getData();
  }, []);
  return (
    <>
      <div className={style.datagrid}>
        {data.map((e) => (
          <div key={e.id} className={style.datadiv}>
            <img src={e.image_link} className={style.Image} />
          </div>
        ))}
      </div>
    </>
  );
};
