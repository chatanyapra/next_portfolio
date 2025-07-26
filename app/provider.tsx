import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
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
            {children}
            <Footer />
        </>
    );
}