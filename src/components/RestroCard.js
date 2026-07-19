import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
    const {restroData} = props;

    const { id, name, cuisines, avgRating, sla, image, cloudinaryImageId} = restroData

    return (
        <div className="restro-card m-4 p-4 w-60 border rounded-lg bg-green-400 hover:bg-green-100">
            <img src={CDN_URL + cloudinaryImageId} alt={name + "logo"} className="rounded-lg mb-4"/>
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestroCard;