import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AnalyticsPage from './components/AnalyticsPage';
import Table from './components/Table';
// import './styles.css';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <AnalyticsPage />
        <Table />
      </div>
    </Provider>
  );
};

export default App;
