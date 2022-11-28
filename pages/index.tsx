import Navbar from "../components/Navbar";
import Container from "../components/MainSlider/Container";
import SliderCard from "../components/MainSlider/SliderCard";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <SliderCard />
    </div>
  );
}
