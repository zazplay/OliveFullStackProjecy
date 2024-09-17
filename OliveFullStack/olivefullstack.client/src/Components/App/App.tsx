import ConteinerMainNews from '../ConteinerMainNews/ConteinerMainNews';
import Footer from '../Footer/Footer';
import HeaderSite from '../HeaderSite/HeaderSite';
import './App.css';


function App() {
    return (<>
        <HeaderSite />
        <hr className="hr-head" />
        <ConteinerMainNews />
        <Footer />
    </>);
}

export default App;