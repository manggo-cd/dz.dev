export default function Home() {
  // Generate 9-pointed star points with golden ratio (38.2%)
  const generateStarPoints = () => {
    const centerX = 100;
    const centerY = 100;
    const outerRadius = 80;
    const innerRadius = outerRadius * 0.382; // Golden ratio
    const points = [];
    
    for (let i = 0; i < 18; i++) {
      const angle = (i * Math.PI) / 9; // 9 points = 18 vertices
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = centerX + radius * Math.cos(angle - Math.PI / 2);
      const y = centerY + radius * Math.sin(angle - Math.PI / 2);
      points.push(`${x},${y}`);
    }
    
    return points.join(' ');
  };

  return (
    <div className="min-h-screen">
      {/* First section - takes up visible page with centered content */}
      <section className="h-screen flex items-center justify-center">
        <div className="px-8 text-center">
          <div className="star-container">
            {/* Background text - 3 columns */}
            <div className="background-text grid grid-cols-3 gap-8 -mb-24 font-extrabold text-sm">
              <div className="col-span-1 text-left">FULLSTACK DEVELOPER</div>
              <div className="col-span-1">VANCOUVER, BC</div>
              <div className="col-span-1 text-right">CS - UNIVERSITY OF BRITISH COLUMBIA</div>
            </div>
            
            {/* Main text - BERNARD */}
            <div className="star-text">
              <h1 className="title">BERNARD</h1>
            </div>
            
            {/* Star behind everything */}
            <svg 
              className="star-svg rotating-star" 
              width="110vh" 
              height="110vh" 
              viewBox="0 0 200 200"
            >
              <polygon
                points={generateStarPoints()}
                fill="#F8F8F8"
              />
            </svg>
          </div>
        </div>
      </section>
      
      {/* Second section - 3 columns, 1 row */}
      <section className="py-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-1">


          </div>
          <div className="col-span-1">
            {/* Column 2 content */}
          </div>
          <div className="col-span-1">
            {/* Column 3 content */}
          </div>
        </div>
      </section>
    </div>
  );
}