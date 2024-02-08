import './Main.scss';

import WeatherSection from './components/WeatherSection/WeatherSection';
import OutfitSection from './components/OutfitSection/OutfitSection';
import FeedSection from './components/FeedSection/FeedSection';


const Main = () => {
  return (
    <main className="main">
      <WeatherSection />
      <OutfitSection />
      <FeedSection />
    </main>
  );
};

export default Main;
