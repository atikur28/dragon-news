import Header from "../Shared/Header/Header";
import LeftSiteNav from "../Shared/LeftSiteNav/LeftSiteNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSiteNav from "../Shared/RightSiteNav/RightSiteNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className="text-3xl font-bold">This is Home</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSiteNav></LeftSiteNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2>News Coming Soon...</h2>
                </div>
                <div className="border">
                    <RightSiteNav></RightSiteNav>
                </div>
            </div>
        </div>
    );
};

export default Home;