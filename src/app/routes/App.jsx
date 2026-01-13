import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/app.scss";
import Home from "../../pages/Home";
import Header from "../../widgets/header/Header";
import Footer from "../../widgets/footer/Footer";


export default function App() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        <Footer/>
        </BrowserRouter>
    );
}