import "./styles/main.css"
import "./styles/reset.css"
import Navbar from "./components/navbar/Navbar" //we can either have the extenstion of the imported js file or not
import Header from "./components/header/Header"
import Section from "./components/section/Section"
// import Project from "./components/project/Project"
import ScrollToTop from "./components/scroll-to-top/ScrollToTop"
import Footer from "./components/footer/Footer"

function App() {
    return (
        <div className="App">

            <Navbar /> 

            <Header />

            <Section />

            {/* <Project /> */}

            <Footer />

            <ScrollToTop />
        </div>
    );
}

export default App;
