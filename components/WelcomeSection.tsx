import "./WelcomeSection.css";

const WelcomeSection = () => {
    return (
        <div>
            <div className="w-2/4 max-md:w-full h-full relative max-sm:overflow-hidden ">
                <div className="w-96 home-image max-sm:scale-75 max-sm:w-[370px]" style={{ borderRadius: "100px", height: "500px" }}></div>
                <div className="w-96 bg-gray-400 m-auto absolute top-0 overflow-hidden max-sm:scale-75" style={{ borderRadius: "100px", height: "500px" }}>
                    <img src={"/assets/images/frontlook boy.png"} className="w-full h-full z-10 " style={{ objectFit: "cover" }} loading="lazy" alt="" />
                </div>
                <img src={"/assets/images/comma.png"} className="imageUser moving-img-2 max-md:hidden" loading="lazy" alt="" />
                <div className="imageUser moving-img left-[-120px] bg-gray-200 flex py-3 px-6 rounded-2xl z-10 justify-between items-center max-sm:relative max-sm:left-20">
                    <div className="relative flex justify-center items-center">
                        <img src={"/assets/images/bubbleball.gif"} className="w-[76px] h-[76px] rounded-full" loading="lazy" alt="" />
                        <img src={"/assets/personsImages/profile-pic.png"} className="w-[65px] h-[65px] rounded-full absolute" style={{ boxShadow: "0 16px 36px rgba(0, 0, 0, .25)" }} loading="lazy" alt="" />
                    </div>
                    <div className="block">
                        <div className="pl-3 pt-2 flex flex-col text-gray-900">
                            <span className="font-bold">Chatanya Pratap</span>
                            <small className="-mt-1 font-extralight text-gray-500">@chatanya</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeSection
