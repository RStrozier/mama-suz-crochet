import HomepageAboutPhoto from '../components/HomepageAboutPhoto';
import HomepageAboutSection from '../components/HomepageAboutSection';
import HomepageHero from '../components/HomepageHero';
import PhotoGrid from '../components/PhotoGrid';

const Homepage = () => {
  return (
    <>
    <HomepageHero />
      <PhotoGrid />
      <HomepageAboutPhoto />
      <HomepageAboutSection />
    </>
  );
};

export default Homepage;