import { Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/Products';
import QuotePage from './pages/Quote';
import RenewalPage from './pages/Renewals';
import AboutPage from './pages/About';
import MainNavigation from './components/layout/MainNavigation';
import SiteFooter from './components/layout/SiteFooter';

function App() {
 return <div> 
     <MainNavigation/>
     <Routes>
        <Route path='/' element={<ProductsPage/>} />
        <Route path='/claims' element={<QuotePage/>} />
        <Route path='/renewals' element={<RenewalPage/>} />
        <Route path='/about' element={<AboutPage/>} />
     </Routes>
     
     <SiteFooter/>
 </div>
}

export default App;
