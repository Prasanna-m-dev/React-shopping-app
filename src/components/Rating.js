import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" color="orange" />
          ) : (
            <AiOutlineStar fontSize="15px" color="orange" />
          )}
        </span>
      ))}
    </>
  );
};

export default Rating;
