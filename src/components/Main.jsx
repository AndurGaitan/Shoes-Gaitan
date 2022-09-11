import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
    return (
        <div>
            <NavBar />
            <Banner />
            <ItemListContainer />
            <ItemDetailContainer/>
            <Footer />
        </div>
    )
}

export default Main;