import {CDN_URL} from "../utils/Constant"
const RestaurantCard = (props) => {
  const { resData } = props;
  const{
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
  } = resData?.info;
  return(
    <div className="w-64 m-4 p-3 rounded-lg  hover:scale-110 shadow-zinc-500  shadow-lg flex-wrap justify-start">
     
    <img
        className="w-full rounded-lg align-middle"
        alt="res-logo"
        src={ CDN_URL+ cloudinaryImageId  }
      />
      <h2  className="font-bold text-md bg-clip-content truncate break-words ">{name}</h2>
      <h6 className="cuisines flex-wrap bg-clip-content truncate ">{cuisines.join(", ")}</h6>
      <span className="flex flex-wrap ">
        <div className="m-1 justify-center">{
          avgRating < 4
            ? <h4 className="heading pt-0 pr-5 text-base w-10 h-6 bg-red-600 text-white font-medium rounded-xl">★{avgRating}</h4>
            : <h4 className="heading pt-0 pr-5 text-base w-10 h-6 bg-green-600 text-white font-medium rounded-xl">★{avgRating}</h4>
        }
        </div>
        <h2 className="justify-center m-1">•</h2>
        <h4 className="heading text-sm justify-between text-black font-bold m-2"> {costForTwo ?? '₹200 for two'}</h4>
        {/* // <h4>{lastMileTravelString} minutes</h4> */}
      </span>


    </div>
    
  )

};
export default RestaurantCard;