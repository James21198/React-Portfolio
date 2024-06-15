import { userState } from "react";

import "./App.css";

import Layout from "./components/Layout";

import PortfolioDashboard from "./components/PortfolioDashboard";
import Contact from "./components/Contact";
import About from "./components/About";

const pages = ["portfolio", "about", "contact"];

function App() {
    const [page, setPage] = useState("portfolio");

    return (
        <Layout pages={pages} onSetPage={setPage}>
            {page === "portfolio" && <PortfolioDashboard />}
            {page === "about" && <About />}
            {page === "contact" && <Contact />}
        </Layout>
    );
}

export default App;