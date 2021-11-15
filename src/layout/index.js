import { Fragment } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.css"

function Main({ children }) {
    return (
        <Fragment>
            <Header />
            {/* <div className="container"> */}
            {/* <div className="row"> */}
            <div className="content">
                {children}
            </div>
            {/* </div> */}
            {/* </div> */}
            <Footer />
        </Fragment>
    )
}

export default Main;