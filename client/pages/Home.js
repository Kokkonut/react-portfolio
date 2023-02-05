import React from "react";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import About from "../src/components/About";

const Home = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <About />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>

    );
}

export default Home;