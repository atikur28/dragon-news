import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center gap-5 bg-[#F3F3F3] py-2 px-5 my-6">
            <Link><button className="btn bg-[#D72050] text-white rounded-none px-6 hover:bg-[#D72050]">Latest</button></Link>
            <Marquee pauseOnHover={true} speed={100}>
               <Link to="/">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;