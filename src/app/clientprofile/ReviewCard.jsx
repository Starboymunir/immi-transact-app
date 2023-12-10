import React from "react";

const ReviewCard = ({ name, location, timePosted, reviewBody }) => {
  return (
    <div className="frame-11">
      <div className="ellipse-div">
        <img className="ellipse" alt="Ellipse" src="pexels-photo-by-emmy-e.png" />
      </div>
      <div className="frame-12">
        <div className="frame-13">
          <div className="text-wrapper-7">{name}</div>
          <div className="text-wrapper-8">{location}</div>
          <div className="frame-14">
            <div className="frame-15">
              {/* Repeat this div block for 5 images */}
              <div>
                <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
              </div>
              <div>
                <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
              </div>
              <div>
                <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
              </div>
              <div>
                <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
              </div>
              
              {/* End of repeated block */}
              <div className="text-wrapper-9">4</div>
            </div>
            <img className="line" alt="Line" src="line-22-2.svg" />
            <div className="text-wrapper-10">{timePosted}</div>
          </div>
        </div>
        <p className="text-wrapper-11">{reviewBody}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
