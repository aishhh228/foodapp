
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [search, setSearch] = useState([])
  
    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
  
      const json = await data.json();
  
      setListOfRestraunt(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    };
  
    return(
        <>
        <div className="p-4 shadow-lg my-1 justify-end">
          <input type="text" className="Search-input" placeholder="Search" value={search} onChange={(e) =>{
            setSearch(e.target.value);
          }}></input>
        <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg "
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(search);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            🔍Search
          </button>
      
        </div>
             <div className="m-2 p-2 flex">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              
              setFilteredRestaurant(filteredList);
              console.log("Filterd",filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
            <div className="resturant-list flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                     <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))}
               
            </div>

        </>
    );

};
      
export default Body
