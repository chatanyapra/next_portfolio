import Navbar from "@/components/Navbar";
import image2 from "../../assets/images/imageface2.png";


const page = () => {
    return (
        <div className="app-main min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto" style={{ maxWidth: "1600px" }}>
            <div className="fixed max-sm:absolute top-0 left-0 bottom-0 right-0 glass-effect p-5 mt-20 text-center"></div>
            <Navbar />
            <div className="w-full flex justify-evenly max-md:items-center z-10 mt-32 max-md:flex-col text-white dark:text-black">
                <div className="w-[52%] max-md:w-[98%] min-h-[450px] overflow-hidden max-md:h-auto transparent-color md:rounded-[50px] rounded-t-[50px] p-6 border-b-0 relative big-screen-light-dark-shadow" style={{}}>
                    <h1 className="text-4xl sm:text-5xl mt-4 font-bold">Hello,</h1>
                    <h1 className="text-4xl sm:text-5xl pt-4 font-bold">I&apos;m Chatanya</h1>
                    <p className="pt-4 text-gray-300 dark:text-gray-800">
                        I am a full stack developer with a passion for creating beautiful and functional web applications. I chose this as a career because I love to create nice stuff. Creativity is the key. Now I target building some awesome stuff that can help people in their daily life.
                    </p>
                    <p className="pt-4 text-gray-300 dark:text-gray-800">
                        I am currently working as a Freelance Developer and a Full Stack Developer Intern and I am open to new opportunities. I have a healthy obsession of learning new everyday which makes a better developer and a better Athlete. I love playing Football.
                    </p>
                </div>
                <div className="w-[34%] max-md:w-[98%] h-auto transparent-color md:rounded-[50px] rounded-b-[50px] overflow-hidden flex justify-center items-center big-screen-light-dark-shadow">
                    <img src={image2.src} className="m-auto h-full max-h-[450px]" alt="" />
                </div>
            </div>
        </div>
    )
}

export default page