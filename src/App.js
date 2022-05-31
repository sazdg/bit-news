import './App.css';
import Pagine from "./routing/Pagine.js";
import Footer from "./components/Footer.js";
import Layout from "./routing/Layout.js";

//navbar + homepage + footer
function App() {
  return (
      <div className="App">
          <Layout />
          <Pagine />
          <Footer />
        
      </div>
  );
}

export default App;
