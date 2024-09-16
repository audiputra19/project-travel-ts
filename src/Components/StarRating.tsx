import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarReg } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

interface Props {
    rating: number | undefined;
    maxStars: number;
}

const StarRating: FC<Props> = ({ rating = 0, maxStars = 5 }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxStars; i++) {
        if (i <= rating) {
             stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-color-base text-sm" />);
        } else if (i - rating < 1) {
            stars.push(<FontAwesomeIcon key={i} icon={faStarHalfStroke} className="text-color-base text-sm" />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={faStarReg} className="text-color-base text-sm" />);
        }
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default StarRating;
