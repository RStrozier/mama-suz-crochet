const HomepageAboutSection = () => {
    return (
      <div
        style={{
          background: "linear-gradient(to bottom, #FF8383, #FFF574)", // Pink to yellow gradient (vertical)
          color: "#FFFFFF", // White text for contrast
          padding: "40px 20px", // Spacing inside the section
          textAlign: "center", // Center-align text
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          About Mama Suz Crochet
        </h2>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto" }}>
          At Mama Suz Crochet, we create handmade, unique, and love-filled crochet items 
          to bring joy to your life. Whether it's a gift for a loved one or a special treat 
          for yourself, each creation is made with care and attention to detail.
        </p>
      </div>
    );
  };
  
  export default HomepageAboutSection;