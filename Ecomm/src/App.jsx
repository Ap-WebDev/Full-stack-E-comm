import './App.css';
import './Style/animate.css';
import './Style/bootstrap.css';
import './Style/icon-fonts.css';
import './Style/main.css';
import './Style/responsive.css';

import ProductsPage from './Pages/ProductsPage';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';


const App = () => {

  return (
    <div>
    <NavBar/>
    <ProductsPage/>
    <Footer/>
    </div>
  );
};

export default App;
