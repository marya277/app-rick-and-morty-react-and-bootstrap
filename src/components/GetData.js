/* eslint-disable react/style-prop-object */
import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export const GetData = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        setChars(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log("Characters:", chars);

  return (
      <div className="row ms-2 me-2">
        {chars.map((item) => (
          <div key={item.id} className="col-3 mb-4 shadow p-2 bg-body rounded border  mt-2"  >
            <div class="card ms-2 me-2 mt-2 d-flex justify-content-evenly" >
              <img src={item.image} alt="profile pic" className="img-responsive" />
              <div class="card-body text-center">
                <h4>{item.name}</h4>
                <p>{item.species}</p>
                <p>{item.gender}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  )};
export default GetData;
