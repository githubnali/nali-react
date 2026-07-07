import RestroCard from "./RestroCard";

import restroObj  from "../utils/mockData";

const Body = () => {
    return (
        <main className="body">
            <div className="filter">
                <button className="top-rated-restro" onClick={() => {console.log("button clicked")}}>Top Rated</button>
            </div>
            <div className="restro-container">
                {
                    restroObj.map((restro) => <RestroCard key={restro.id} restroData={restro}/>)
                }
            </div>
        </main>
    )
}

export default Body;
