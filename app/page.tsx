import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function HomePage() {
  return (
    <div>
      <div className="fixed top-0 left-0 bottom-0 right-0 glass-effect p-5 mt-20 text-center"></div>
      <Navbar />
      <Home />
    </div>
  );
}
