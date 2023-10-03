import { Link, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const NewsPage = () => {
    const [clickedNews, setClickedNews] = useState([]);
    const {id} = useParams();

    const detail = clickedNews?.find( item => item?._id == id );

    useEffect(() => {
        fetch('/news.json')
          .then(res => res.json())
          .then(data => setClickedNews(data))
    },[])


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-5 my-20">
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold text-[#403F3F]">Dragon News</h2>
                    <div className="p-7 border mt-10">
                        <img className="w-full" src={detail.image_url} alt="" />
                        <h2 className="text-2xl font-semibold my-5">{detail.title}</h2>
                        <p className="text-[#706F6F] text-sm md:text-justify">{detail.details}</p>
                        <div className="mt-3">
                            <Link><button className="btn bg-[#D72050] text-white hover:bg-[#D72050] rounded-none px-5">All news in this category</button></Link>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;