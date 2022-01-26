import React from "react";
import "./RestaurantDetail.css"
import logo from "../image/Fastor Logo.png"
const RestaurantDetail = ({ setSelectedRestaurant, selectedRestaurant }) => {
  return (
    <div className="HomePage">
      <button className="back-btn" onClick={() => setSelectedRestaurant({})}><i className="fas fa-arrow-circle-left"></i></button>
      
      <div className="resturant-div">
        <div className="resturant-card m-2">
          <img className="resturant-img" src={selectedRestaurant.images[0].url} alt="" ></img>
          <img className="logo-img" src={logo} alt=""></img>
          <h2>Resturant Name : {selectedRestaurant.restaurant_name}</h2>
          <h2>Address : {selectedRestaurant.location.location_address}{" "}
                          {selectedRestaurant.location.location_address_2}</h2>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
