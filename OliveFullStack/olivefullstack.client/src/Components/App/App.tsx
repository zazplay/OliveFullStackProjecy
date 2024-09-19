//import PageCurentNews from '../../Pages/PageCurentNews/PageCurentNews';
import Footer from '../Footer/Footer';
import HeaderSite from '../HeaderSite/HeaderSite';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import AdminPage from '../../Pages/AdminPage/AdminPage';
import './App.css';
//import ConteinerMainNews from '../../Pages/ConteinerMainNews/ConteinerMainNews';

{/*<Route path="/home" element={<HomePage />} />*/ }
{/*<Route path="/login" element={<LoginForm onReloadNavBar={trigerReloadNavBar} />} />*/ }
{/*<Route path="/registr" element={<RegistrForm />} />*/ }
{/*<Route path="/notes" element={<NotesPage />} />*/ }
{/*<Route path="/admin" element={<AdminPanel />} />*/ }
function App() {
    return (<div>
        <Router >
            <HeaderSite />
            <hr className="hr-head" />
            <Routes>
                <Route path="/" element={<AdminPage />} />
                
            </Routes>
            <Footer />
        </Router>
        </div>
        
    );
    //<AdminPage />
    //        <PageCurentNews />
    //    <ConteinerMainNews />
   
}

export default App;