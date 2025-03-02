import Hero from "@/components/Home/Hero";
import OurServices from "@/components/Home/OurServices";
import SetLGA from "@/components/Home/SetLGA";
import VisionxMission from "@/components/Home/VisionxMission";
// import { Button } from "@/components/UI/Button";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="">
        <Hero />
        <SetLGA />
        <OurServices />
        <VisionxMission />
      </div>
    </>
  );
}
