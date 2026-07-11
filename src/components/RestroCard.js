const RestroCard = (props) => {
    const {restroData} = props;

    const { id, name, cuisines, avgRating, sla, image} = restroData

    return (
        <div className="restro-card">
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestroCard;