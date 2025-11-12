import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import StickyNav from "./components/StickyNav";
import TerminalTrigger from "./components/TerminalTrigger";

export default function Home() {
  // Generate 9-pointed star points with golden ratio (38.2%)

  return (
    <div className="min-h-screen">
      <StickyNav />
      <TerminalTrigger />
      <SectionOne />

      <SectionTwo />
    </div>
  );
}
