import { configureStore } from '@reduxjs/toolkit';
import Router from './Router';
import { Provider } from 'react-redux';
import weatherReducer from './reducers/WeatherSlice'


const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
