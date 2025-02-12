import KeyFacts from "./(modules)/home/keyFacts";
import HomePage from "./(modules)/home/page";
import Slider from "./(modules)/home/slider";

export default function Home() {
  return (
    <div>
      <HomePage />
      <KeyFacts />
      <Slider />
    </div>
  );
}
