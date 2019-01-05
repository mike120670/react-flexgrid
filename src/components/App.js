import React from 'react';

import '../css/App.css';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import MyContent from '../components/grid/MyContent';
class App extends React.Component {

  render() {
    return (
      <div className="App">
      <Navigation/>
      <MyContent/>
      <Footer/>  
      </div>
    );
  }
}

export default App;