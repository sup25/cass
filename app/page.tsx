import About from "./(modules)/home/about";
import Certification from "./(modules)/home/certification";
import TextBox from "./(modules)/home/keyFacts";
import KeyFacts from "./(modules)/home/keyFacts";
import HomePage from "./(modules)/home/page";
import Problems from "./(modules)/home/problems";
import Solutions from "./(modules)/home/solutions";
import Timeline from "./(modules)/home/timeline";

export default function Home() {
  return (
    <div>
      <HomePage />
      <TextBox preheading="Key Facts" heading="The Global Waste Problem!" />
      <Problems />
      <TextBox heading="Cassandra Pyrolysis Reactors" />
      <Solutions />
      <About />
      <Certification />
      <Timeline />
    </div>
  );
}
