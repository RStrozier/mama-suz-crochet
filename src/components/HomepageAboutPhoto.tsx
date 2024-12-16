import { motion } from "framer-motion";
import DanielleImage from "../assets/danielle-main-image.jpg";
import useInView from "../hooks/useInView";

const HomepageAboutPhoto = () => {
  const isInView = useInView({ threshold: 0.1 });
  
  return (
    <>
      <div style={{ backgroundColor: "#FF8383" }}>
        <br />
        <div className="centered">
          <motion.img
            src={DanielleImage}
            alt="Danielle"
            className="observed-image" 
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 2 }} 
            style={{
              maxWidth: "100%",
              height: "25rem",
              borderRadius: "15px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)"
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HomepageAboutPhoto;