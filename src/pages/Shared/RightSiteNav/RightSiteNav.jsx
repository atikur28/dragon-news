import { AiOutlineGoogle, AiFillGithub, AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import bgImage1 from "../../../assets/images/qZone1.png";
import bgImage2 from "../../../assets/images/qZone2.png";
import bgImage3 from "../../../assets/images/qZone3.png";


const RightSiteNav = () => {
    return (
        <div>
            <div>
                <h2 className="text-xl font-bold mb-5">Login With</h2>
                <Link><div className="btn btn-sm border border-sky-400 rounded-md py-1.5 text-sm font-medium text-sky-500 mb-2 flex items-center justify-center gap-3 mx-4 bg-white"><AiOutlineGoogle className='text-xl'></AiOutlineGoogle> Login with Google</div></Link>
                <Link><div className="btn btn-sm border border-[#403F3F] rounded-md py-1.5 text-sm font-medium text-[#403F3F] flex items-center justify-center gap-3 mx-4 mb-2 bg-white"><AiFillGithub className='text-xl'></AiFillGithub> Login with Github</div></Link>
            </div>
            <div>
                <h2 className="text-xl font-bold mb-5 mt-8">Find Us On</h2>
                <div className='border rounded-t-lg py-2'><Link><button className="bg-white w-max h-12 text-lg ml-5 flex items-center gap-3"><AiFillFacebook className='text-xl'></AiFillFacebook> <span className='text-[#706F6F] font-medium'>Facebook</span></button></Link></div>
                <div className='border-x border-b py-2'><Link><button className="bg-white w-max h-12 text-lg ml-5 flex items-center gap-3"><AiOutlineTwitter className='text-xl'></AiOutlineTwitter> <span className='text-[#706F6F] font-medium'>Twitter</span></button></Link></div>
                <div className='border-x border-b rounded-b-lg py-2'><Link><button className="bg-white w-max h-12 text-lg ml-5 flex items-center gap-3"><AiOutlineInstagram className='text-xl'></AiOutlineInstagram> <span className='text-[#706F6F] font-medium'>Instagram</span></button></Link></div>
            </div>
            <div className='p-4 bg-[#F3F3F3] my-5'>
                <h2 className="text-xl font-bold">Q-Zone</h2>
                <div className='flex justify-center my-7'>
                    <img className='w-full' src={bgImage1} alt="" />
                </div>
                <div className='flex justify-center my-7'>
                    <img className='w-full' src={bgImage2} alt="" />
                </div>
                <div className='flex justify-center my-7'>
                    <img className='w-full' src={bgImage3} alt="" />
                </div>
            </div>
            <div className='p-8 mb-10' style={{background: 'url(https://i.ibb.co/Pzc8NQH/bg.png)',}}>
                <h2 className='text-3xl font-bold text-center mt-10 text-white'>Create an Amazing Newspaper</h2>
                <p className='text-center text-white my-4'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <div className='w-max mx-auto mb-10'>
                    <Link><button className='text-white bg-[#D72050] px-5 py-4 text-xl font-semibold'>Learn More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default RightSiteNav;