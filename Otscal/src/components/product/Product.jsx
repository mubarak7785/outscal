import { useEffect, useState } from "react";
import "./Product.css";
export const Product = () => {
  const [data, setData] = useState([]);
  // const [page,setPage]=useState(1)
  useEffect(() => {
    fetch("https://outscaldata.herokuapp.com/data?_limit=15")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const sortfun = (e) => {
    const { value } = e.target;
    var arr = [];
    Object.assign(arr, data);
    if (value == "all") {
      setData(data);
    } else if (value == "low") {
      let data1 = arr.sort((a, b) => a.price - b.price);
      setData(data1);
    } else {
      let data2 = arr.sort((a, b) => b.price - a.price);
      setData(data2);
    }
  };

  console.log(data);
  return (
    <div>
        <h1>Product page</h1>
      <div className="sort">
        <label htmlFor="">Sort By : </label>
        <select name="" id="ss" onChange={sortfun}>
          <option value="all">Select</option>
          <option value="high">High to Low</option>
          <option value="low">Low to High</option>
        </select>
      </div>
      
      <div className="main">
        {data.map((elem) => {
          return (
            <div className="display">
              <img src={elem.image} alt="" />
              <p>Title   : {elem.title}</p>
              <p>Price   : {elem.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
