//import RRoutes from "./components/Routes";
import "./App.css";
import Nav from "./components/Nav";
import RRoutes from "./components/Routes";
import Form from "./components/Form";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
          <div className="Navbar">
            <Nav />
            </div>
            <div className="headerImg">
                <img src="/src/components/posters/main.png" alt="" />{" "}
            </div>
            <div className="mainBody">
                <RRoutes />
                <div className="posterBox">
                    <img src="/src/components/posters/poster1.png" alt="" />{" "}
                    <img src="/src/components/posters/poster2.png" alt="" />{" "}
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default App;
