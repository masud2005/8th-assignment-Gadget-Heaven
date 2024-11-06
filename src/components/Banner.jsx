import { useLocation, useNavigate } from "react-router-dom";

const Banner = () => {

    const { pathname } = useLocation();
    // console.log(pathname)
    const navigate = useNavigate();

    return (
        <div className=''>
            <div className={`${(pathname === '/' || pathname === '/Computers' || pathname === '/Phones' || pathname === '/Smart%20Watches' || pathname === '/Chargers' || pathname === '/Power%20Banks') && '-mt-24'} bg-primary pt-20 pb-24 md:pb-32 lg:pb-52 xl:pb-56 md:mx-5 xl:mx-10 rounded-3xl  m-2`}>
                <div className="container mx-auto">
                    <div className="w-5/6 mx-auto">
                        <h1 className="font-bold text-4xl lg:text-[45px] xl:text-[52px] text-center text-white leading-[45px] lg:leading-[72px] mb-6">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="text-center text-white mb-8">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <div className="flex flex-grow justify-center">
                            <button onClick={() => navigate('/dashboard')} className="btn text-xl text-primary rounded-full ">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 -mt-24 md:-mt-32 lg:-mt-52">
                <img className="mx-auto bg-white/30 p-3 md:p-5 rounded-2xl border-2 border-white h-[180px] md:h-[300px] lg:h-[430px] xl:h-[480px]" src="https://i.ibb.co.com/D9JjCs4/banner-card.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;