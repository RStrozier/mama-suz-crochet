import DanielleImage from "../assets/danielle-main-image.jpg";

const HomepageAbout = () => {
  return (
    <>
      <div className="mini-spacer"></div>
      <div className="centered">About Mama Suz Crochet</div>
      <br />
      <div className="centered">
        <img
          src={DanielleImage}
          alt="Danielle"
          style={{ maxWidth: "100%", height: "25rem", borderRadius: "15px" }}
        />
      </div>
    </>
  );
};

export default HomepageAbout;
