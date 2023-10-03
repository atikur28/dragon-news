import PropTypes from "prop-types";
import { LiaBookmarkSolid } from "react-icons/lia";
import { AiOutlineShareAlt } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const {
    author,
    title,
    details,
    image_url,
    _id,
    rating,
    total_view,
  } = singleNews;
  return (
    <div className="mb-10 border">
      <div className="bg-[#F3F3F3] py-4 px-5 mb-2 rounded-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img className="w-8 rounded-full" src={author.img} alt="" />
          <div>
            <h5>{author.name}</h5>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <LiaBookmarkSolid className="text-2xl"></LiaBookmarkSolid>
          <AiOutlineShareAlt className="text-2xl"></AiOutlineShareAlt>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-[#403F3F] text-lg font-bold">{title}</h3>
        <img className="w-full my-3" src={image_url} alt="" />
        {details.length > 300 ? (
          <p className="text-sm font-medium text-[#706F6F]">
            {details.slice(0, 300)}{" "}
            <Link to={`/news/${_id}`} className="text-red-500">
              Read more...
            </Link>
          </p>
        ) : (
          <p className="text-sm font-medium text-[#706F6F]">{details}</p>
        )}
        <div className="flex items-center justify-between mt-5">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <p className="ml-3 text-lg">{rating.number}</p>
          </div>
          <p className="text-[#706F6F] flex items-center gap-3">
            <FaEye className="text-2xl"></FaEye> {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  singleNews: PropTypes.node,
};

export default NewsCard;
