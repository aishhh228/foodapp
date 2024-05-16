import './App.css';
import ContactUs from './component/ContactUs';
import Header from './component/Header';
import About from './component/About';
import Body from './component/Body';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
       <Header/>
       <Body/>
       <ContactUs/>
       <About/>
       <Footer/>
    </div>
  );
}

export default App;
