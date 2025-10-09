import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";
import dynamic from 'next/dynamic'
const BouncingBall = dynamic(() => import("@/components/ui/bouncingBall"));
export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full overflow-hidden">
            <NextTopLoader
                color="#38bdf8"
                initialPosition={0.08}
                crawlSpeed={200}
                height={4}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
            />
            <Navbar />
            <BouncingBall />
            {children}
            <Footer />
        </div>
    );
}