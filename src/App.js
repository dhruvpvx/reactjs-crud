import { Provider } from 'react-redux';
import Routers from './routes/Routers';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routers />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

