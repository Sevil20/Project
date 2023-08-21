import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Contact from './pages/Contact';
import { Provider } from 'react-redux';
import store from '../src/redux/store/store';
import CardDetailPage from './components/CardDetailPage';


const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/card/:id" Component={CardDetailPage} /> {/* Use "component" instead of "Component" */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
