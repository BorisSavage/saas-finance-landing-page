import Analytics from "components/Analytics";
import Cards from "components/Cards";
import Footer from "components/Footer";
import Newsletter from "components/Newsletter";
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Analytics />
            <Newsletter />
            <Cards />
            <Footer />
        </div>
    );
}

export default App;
