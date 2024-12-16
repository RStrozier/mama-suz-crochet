const HomepageAboutSection = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #FF8383, #FFF574)", // Pink to yellow gradient (vertical)
        color: "#FFFFFF",
        padding: "40px 20px", // Spacing inside the section
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Add shadow for depth
        }}
      >
        About Mama Suz Crochet
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.6", // Improve readability
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)", // Subtle shadow for paragraph text
        }}
      >
        Mama Suz is a mother of 5 beautiful God-given children, which are the pride
        and joy of her life. She began crocheting as a way to relax, while still
        including her children in the process.
        <div className="spacer"></div>
        At Mama Suz Crochet, we create handmade, unique, and love-filled crochet items
        to bring joy to your life. Whether it's a gift for a loved one or a special treat
        for yourself, each creation is made with care and attention to detail.
      </p>
    </div>
  );
};

export default HomepageAboutSection;