import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Releases from "./sections/Releases";
import Listen from "./sections/Listen";
import Artists from "./sections/Artists";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Releases />
      <Listen />
      <Artists/>
      <Contact/>
    </>

  );
}
