import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <div className="app-main min-h-[1200px] w-full relative  overflow-hidden flex flex-col items-center m-auto z-10" style={{ maxWidth: "1600px" }}>
            <div className="fixed max-sm:absolute top-0 left-0 bottom-0 right-0 glass-effect text-center"></div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}