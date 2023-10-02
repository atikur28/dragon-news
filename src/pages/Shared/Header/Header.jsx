import NewsLogo from "../../../assets/images/logo.png";
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <div className="mt-10">
                <img className="mx-auto" src={NewsLogo} alt="" />
            </div>
            <p className="font-normal text-[#706F6F] my-3">Journalism Without Fear or Favour</p>
            <p className="text-lg text-[#403F3F]">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;