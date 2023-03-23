import React from "react";

const DataHub = ({name, title, image, bid}) => {
 
    return(
        <div className="mainCard">
     <div className="card">
         <div className="imgBackground">
            <img className="dataImage" src={image} alt={title}/>
        </div>
        <h1 className="dataName">
            <span><div className="ko">KO</div><span className="koray">Koray Okumus</span> <small className="bidder"><span className="name">{name}</span>(Highest Bidder)</small></span></h1>
        <p className="dataTitle">{title}</p>
        <p className="dataBid">Current Bid : <span>{bid}</span></p>
        <button className="dataButton">Add to Wishlist</button>
    </div>
    </div>
    )
}

export default DataHub;