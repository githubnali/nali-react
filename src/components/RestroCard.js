const RestroCard = (props) => {
    console.log(props);
    const {restroData} = props;
    const {restroName, cusine, rating, deliveryTime, image} = restroData;

    return (
        <div className="restro-card">
            <img  className="restro-img" alt="restro-img" src={restroData.image}/>
            <h3>{restroName}</h3>
            <h4>{cusine}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestroCard;