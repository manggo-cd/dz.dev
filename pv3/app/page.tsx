import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";

export default function Home() {
  // Generate 9-pointed star points with golden ratio (38.2%)

  return (
    <div className="min-h-screen">
      <SectionOne />

      <SectionTwo />
    </div>
  );
}
