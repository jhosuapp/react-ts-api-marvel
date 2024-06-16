import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  
import { Navbar } from "../layouts/header/Navbar";
  
const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" />
            </Routes>
        </Router>
    );
}

export { AppRouter }