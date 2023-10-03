import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import Header from "../Shared/Header/Header";
import LeftSiteNav from "../Shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
                <div className="">
                    <LeftSiteNav></LeftSiteNav>
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-4">Dragon News Home</h2>
                    {
                        news?.map((singleNews, idx) => <NewsCard key={idx} singleNews={singleNews}></NewsCard>)
                    }
                </div>
                <div className="">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;