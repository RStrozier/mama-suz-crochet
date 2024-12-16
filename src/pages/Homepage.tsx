import DanielleImage from '../assets/danielle-main-image.jpg';

const Homepage = () => {
  return (
    <>
      <div className="mini-spacer"></div>
      <div className="centered">Mama Suz Crochet</div>
      <div className="centered">
      <img 
        src={DanielleImage} 
        alt="Danielle" 
        style={{ maxWidth: '100%', height: '25rem' }} 
      />
      </div>
    </>
  );
};

export default Homepage;