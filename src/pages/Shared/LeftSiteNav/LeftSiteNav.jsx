import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newsImage1 from "../../../assets/images/1.png";
import newsImage2 from "../../../assets/images/2.png";
import newsImage3 from "../../../assets/images/3.png";
import { BsCalendar4Event } from 'react-icons/bs';

const LeftSiteNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">All Categories</h2>
      <div>
        <h2 className="text-xl font-semibold text-center bg-[#E7E7E7] my-4 py-3 text-[#403F3F] rounded-md">
          National News
        </h2>
      </div>
      <div>
        {
            categories.map(category => <Link to={`/category/${category.id}`} className="block px-20 my-3 text-lg text-[#9F9F9F]" key={category.id}>{category.name}</Link>)
        }
      </div>
      <div className="mt-10">
        <div>
            <img className="w-full" src={newsImage1} alt="" />
            <h3 className="text-lg font-semibold text-[#403F3F] mt-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex items-center gap-10 mt-3">
                <p className="font-semibold">Sports</p>
                <p className="flex items-center gap-2 text-[#9F9F9F]"><BsCalendar4Event></BsCalendar4Event>Jan 4, 2022</p>
            </div>
        </div>
        <div className="my-16">
            <img className="w-full" src={newsImage2} alt="" />
            <h3 className="text-lg font-semibold text-[#403F3F] mt-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex items-center gap-10 mt-3">
                <p className="font-semibold">Sports</p>
                <p className="flex items-center gap-2 text-[#9F9F9F]"><BsCalendar4Event></BsCalendar4Event>Jan 4, 2022</p>
            </div>
        </div>
        <div>
            <img className="w-full" src={newsImage3} alt="" />
            <h3 className="text-lg font-semibold text-[#403F3F] mt-2">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
            <div className="flex items-center gap-10 mt-3">
                <p className="font-semibold">Sports</p>
                <p className="flex items-center gap-2 text-[#9F9F9F]"><BsCalendar4Event></BsCalendar4Event>Jan 4, 2022</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSiteNav;
