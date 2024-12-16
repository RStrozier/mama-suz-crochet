import backgroundVid from "../assets/hero-background.mp4";

const HomepageHero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "50vh", // 50% of the viewport height
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={backgroundVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centers the content
          zIndex: 1,
          textAlign: "center",
          color: "#FFFFFF",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        <h1
          style={{
            fontSize: "2.33rem",
            fontWeight: "bold",
            margin: "0",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Welcome to Mama Suz Crochet
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            marginTop: "1rem",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
          }}
        >
          Handmade Creations with Love
        </p>
      </div>
    </div>
  );
};

export default HomepageHero;
