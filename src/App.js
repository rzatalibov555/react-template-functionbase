import './App.css';
import About from './components/about/About';
import ContentSection from './components/ContentSection/ContentSection';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <About title="About Us"/>
      <ContentSection/>
      <About title="About the studio" className="d-flex justify-content-center align-items-center"/>
    </div>
  );
}

export default App;
