import HomepageAbout from '../components/HomepageAbout';
import HomepageHero from '../components/HomepageHero';
import PhotoGrid from '../components/PhotoGrid';

const Homepage = () => {
  return (
    <>
    <HomepageHero />
      <PhotoGrid />
      <br />
      <HomepageAbout />
    </>
  );
};

export default Homepage;