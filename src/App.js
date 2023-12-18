import logo from './logo.svg';
import './App.css';
import Header from './component/header/header'
import Slider from './component/slider/slider';
import Intro from './component/intro/intro';
import About from './component/about/about';
import Quote from './component/quote/quote';
import Skills from './component/skills/skills';
import Experiences from './component/experience/experiences';

function App() {
  return (
    <>
    <Header/>
    <Slider/>
    <Intro/>
    <About/>
    <Quote/>
    <Skills/>
    <Experiences/>
    </>
  );
}

export default App;
