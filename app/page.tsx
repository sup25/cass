import About from "./(modules)/home/about";
import KeyFacts from "./(modules)/home/keyFacts";
import HomePage from "./(modules)/home/page";
import Slider from "./(modules)/home/slider";
import Timeline from "./(modules)/home/timeline";

export default function Home() {
  return (
    <div>
      <HomePage />
      <KeyFacts />
      <Slider />
      <Timeline />
      <About />
    </div>
  );
}
