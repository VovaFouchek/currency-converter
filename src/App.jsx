import { Provider } from 'react-redux';

import Home from './pages/Home';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
};

export default App;
