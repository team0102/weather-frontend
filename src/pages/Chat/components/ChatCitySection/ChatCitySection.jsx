import { useState, useEffect } from 'react';
import Button from '../../../../components/Button/Button';
import './ChatCitySection.scss';
import { LOCATIONS_WITH_XY } from '../../../../data/LocationData/LocationData';

const ChatCitySection = () => {
  const [userLocations, setUserLocations] = useState({});
  const [selectedCityKey, setSelectedCityKey] = useState();

  useEffect(() => {
    const savedUserLocations = JSON.parse(
      localStorage.getItem('userLocations'),
    );
    if (savedUserLocations) {
      setUserLocations(savedUserLocations);
    }
  }, []);

  useEffect(() => {
    if (!selectedCityKey && Object.keys(userLocations).length !== 0) {
      setSelectedCityKey(Object.keys(userLocations)[0]);
    }
  }, [userLocations]);

  return (
    <div className="chatCitySection section">
      <span className="instruction">지역을 선택하세요.</span>
      <div className="buttonsWrap">
        {Object.keys(userLocations).map(key => {
          const onClickCity = () => {
            setSelectedCityKey(key);
          };
          return (
            <div key={key} className="buttonWrap">
              <Button
                id={key}
                key={key}
                onClick={onClickCity}
                color={key === selectedCityKey ? 'primary' : 'secondary'}
              >
                {LOCATIONS_WITH_XY[key].abbr}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatCitySection;
