import React, { useEffect, useState } from "react";
import "./Home.css";
// import img from "../image/Others.png";
import { useNavigate } from "react-router-dom";
import RestaurantDetail from "./RestaurantDetail";
const Home = () => {
  const [resdata, setresData] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(`/login`);
    }
  }, [navigate]);
  useEffect(() => {
    const bearer = "Bearer " + localStorage.getItem("token");
    fetch("https://staging.fastor.in/v1/m/restaurant?city_id=118&&", {
      method: "GET",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
    })
      .then((apidata) => {
        return apidata.json();
      })
      .then((actualdata) => {
        setresData(actualdata);
        console.log(actualdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {!selectedRestaurant.restaurant_id ? (
        <>
        <div className="HomePage">
          <h1 className="main-heading">Fastor Technology</h1>
          <div>
            {resdata?.map((val) => {
              return (
                <div className="row item-card m-1" key={val.restaurant_id}>
                  <div className="col-lg-4 col-md-6 col-sm-10 m-auto ">
                    <div className="row m-2">
                      <div className="col-lg-5 col-md-5 col-sm-10 card-body m-auto">
                        <img
                          className="card-img"
                          src={val.images[0].url}
                          alt=""
                        ></img>
                      </div>
                      <div className="col-lg-7 col-md-7 col-sm-10 card-body m-auto">
                        <h1 className="item-title">{val.restaurant_name}</h1>
                        <h5 className="item-detail mt-3">
                          Location : {val.location.city_name}
                        </h5>
                        <h5 className="item-detail">
                          Address : {val.location.location_address}{" "}
                          {val.location.location_address_2}
                        </h5>
                        <button
                          className="click-btn"
                          onClick={() => setSelectedRestaurant(val)}
                        >
                          Click
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </>
      ) : (
        <RestaurantDetail
          selectedRestaurant={selectedRestaurant}
          setSelectedRestaurant={setSelectedRestaurant}
        />
      )}
    </>
  );
};
export default Home;
