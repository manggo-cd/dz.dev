export default function Home() {
  return (
    <div className="min-h-screen">
      {/* First section - takes up visible page with centered content */}
      <section className="h-screen flex items-center justify-center">
        <div className="max-w-6xl mx-auto px-8 text-center">

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