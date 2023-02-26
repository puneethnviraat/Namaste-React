import {CLOUDINARY_URL} from "../../config"

const ResturentCard = ({ name, area, avgRating, cloudinaryImageId }) => {
    return (
      <div className="ResturentCard">
        <img
          src={
            CLOUDINARY_URL+
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <p>{area}</p>
        <p>
          <b> {avgRating}</b> stars
        </p>
      </div>
    );
  };

  export default ResturentCard