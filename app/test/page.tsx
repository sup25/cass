import React from "react";
import { Camera } from "lucide-react";

const Homepage = () => {
  return (
    <div>
      {/* SECTION 1: Hero Section */}
      <header
        style={{
          background: "linear-gradient(to bottom, #004790, #39d5ff)",
          padding: "20px",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <div style={{ position: "absolute", top: "20px", left: "20px" }}>
          CASSANDRA LOGO HERE
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "80vh",
            padding: "100px 50px 50px 50px",
          }}
        >
          {/* Main Title */}
          <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
            RECYCLING WASTE DESTINED FOR LANDFILL
          </h1>

          {/* Stats Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              gap: "50px",
            }}
          >
            <div>
              <h2 style={{ fontSize: "36px" }}>1.2M</h2>
              <p>Tonnes recycled</p>
            </div>
            <div>
              <h2 style={{ fontSize: "36px" }}>24</h2>
              <p>Sites in operation</p>
            </div>
            <div>
              <h2 style={{ fontSize: "36px" }}>100+</h2>
              <p>Global partners</p>
            </div>
          </div>
        </div>
      </header>

      {/* SECTION 2: Mission Section */}
      <section
        style={{
          background: "linear-gradient(to bottom, #3c4a59, #bccad9)",
          padding: "50px 20px",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <div
          style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "30px" }}>
            OUR MISSION IS TO BE THE LINK IN A CIRCULAR ECONOMY WHERE NO NEW
            PLASTIC IS PRODUCED FROM CRUDE OIL AND ALL PLASTIC BECOMES A
            CIRCULAR MATERIAL
          </h2>

          <p style={{ fontSize: "18px", marginBottom: "50px" }}>
            At Cassandra we have always been driven with our aim to create a
            green and economically viable solution to the increasing waste
            problem. And with years of knowledge and expertise we have build the
            most economically viable solution to the plastic and tyre problem
            the world has seen.
          </p>

          {/* Four Pillars Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "30px",
              margin: "0 auto",
              maxWidth: "900px",
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                color: "#3c4a59",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(to right, #119fa9, #2fc19c)",
                  borderRadius: "50%",
                  padding: "20px",
                  width: "fit-content",
                  margin: "0 auto 20px auto",
                }}
              >
                <Camera size={48} color="white" />
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Circular Economy
              </h3>
            </div>

            {/* Card 2 */}
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                color: "#3c4a59",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(to right, #119fa9, #2fc19c)",
                  borderRadius: "50%",
                  padding: "20px",
                  width: "fit-content",
                  margin: "0 auto 20px auto",
                }}
              >
                <Camera size={48} color="white" />
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                High Environmental Impact
              </h3>
            </div>

            {/* Card 3 */}
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                color: "#3c4a59",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(to right, #119fa9, #2fc19c)",
                  borderRadius: "50%",
                  padding: "20px",
                  width: "fit-content",
                  margin: "0 auto 20px auto",
                }}
              >
                <Camera size={48} color="white" />
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Full Material Recovery
              </h3>
            </div>

            {/* Card 4 */}
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                color: "#3c4a59",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(to right, #119fa9, #2fc19c)",
                  borderRadius: "50%",
                  padding: "20px",
                  width: "fit-content",
                  margin: "0 auto 20px auto",
                }}
              >
                <Camera size={48} color="white" />
              </div>
              <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>
                Fostering Environmental Sustainability
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
