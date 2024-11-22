import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Releases from "./sections/Releases";
import Listen from "./sections/Listen";
import Artists from "./sections/Artists";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Releases />
      <Listen />
      <Artists/>
    </>

  );
}
