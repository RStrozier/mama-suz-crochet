import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }} // Initial position above the viewport
      animate={{ y: 0 }} // Slide down into position
      transition={{ duration: 0.5 }} // Smooth entrance animation
      style={{ position: "sticky", top: 0, zIndex: 1100 }} // Ensure it sticks to top
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: scrolled ? "#FF8383" : "transparent", // Change color on scroll
          boxShadow: scrolled
            ? "0px 4px 6px rgba(0, 0, 0, 0.2)" // Add shadow when scrolled
            : "none",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease", // Smooth transitions
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                color: "#FFFFFF",
                fontSize: {
                  xs: ".95rem", // Small size for extra-small screens (mobile)
                  sm: "1.25rem", // Slightly larger for small screens
                  md: "1.5rem", // Default size for medium+ screens
                },
              }}
            >
              Mama Suz Crochet
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/shop">
              Shop
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
};

export default Navbar;
