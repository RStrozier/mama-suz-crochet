import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import SeahorseOne from "../assets/seahorse-image-1.jpg";
import TurtleOne from "../assets/turtle-image-1.jpg";
import TurtleTwo from "../assets/turtle-image-2.jpg";
import LightDoll from "../assets/light-person-image.jpg";
import NerinaImage from "../assets/nerina-image.jpg";
import DannyImage from "../assets/danny-image.jpg";

const photos = [SeahorseOne, TurtleOne, TurtleTwo, NerinaImage, LightDoll, DannyImage];

const PhotoGrid = () => (
  <Box
    sx={{
      backgroundColor: "#FFF574", // Yellow background
      padding: "24px 16px", // Padding around the grid
    }}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: "800px", // Constrain grid width
        margin: "auto", // Center the grid
      }}
    >
      <Masonry columns={{ xs: 3 }} spacing={1.5}>
        {photos.map((src, index) => (
          <Box
            key={index}
            sx={{
              overflow: "hidden", 
              borderRadius: "8px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease", // Add smooth hover effect
              "&:hover": {
                transform: "scale(1.05)", // Slight zoom on hover
                boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.4)",
              },
            }}
          >
            <img
              src={src}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%", 
                height: "auto", 
                display: "block",
              }}
            />
          </Box>
        ))}
      </Masonry>
    </Box>
  </Box>
);

export default PhotoGrid;