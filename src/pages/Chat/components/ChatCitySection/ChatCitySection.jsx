import { useState } from 'react';
import Button from '../../../../components/Button/Button';
import './ChatCitySection.scss'

const ChatCitySection = () => {
  const [cities, setCities] = useState([]);

  
  return <div className="chatCitySection section">
    {cities.map(cityInfo => <Button></Button>)}
  </div>
};

export default ChatCitySection;