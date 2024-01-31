import './Main.scss';

import WeatherSection from './Components/WeatherSection/WeatherSection';
import OutfitSection from './Components/OutfitSection/OutfitSection';
import FeedSection from './Components/FeedSection/FeedSection';


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
