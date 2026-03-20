


import './App.css';
import Nav from "./component/Nav"
import Main from './component/main'; 
import Footer from "./component/Footer"
import ScrollToTop from './component/ScrollToTop';

function App() {

  return (
    <div>
      <Nav />
      <ScrollToTop />  {/* ✅ Add this here */}
      <Main />
      <Footer />

      {/* Your Routes */}
    </div>
  );
}

export default App;