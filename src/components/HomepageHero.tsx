import Typography from "@mui/material/Typography";
import backgroundVid from "../assets/hero-background.mp4";
import Box from "@mui/material/Box";

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
        playsInline
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
        <Typography
          component="h1"
          sx={{
            fontSize: {
              xs: "1.25rem",
              sm: "1.55rem",
              md: "2.15rem",
            },
            fontWeight: "bold",
            margin: "0",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
          }}
        >
          Welcome to Mama Suz Crochet
        </Typography>
        <Box
          sx={{
            fontSize: {
              xs: "1rem", // Small size for extra-small screens (mobile)
              sm: "1.25rem", // Slightly larger for small screens
              md: "1.5rem", // Default size for medium+ screens
            },
            fontStyle: "italic",
            marginTop: "1rem",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.6)",
          }}
        >
          Handmade Creations with Love
        </Box>
      </div>
    </div>
  );
};

export default HomepageHero;
