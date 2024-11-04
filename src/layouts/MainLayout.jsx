import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// const context = crea

const MainLayout = () => {
    return (
        <div>
            {/* Header */}
            <Navbar />

            {/* Dynamic Sections */}
            <div className="my-12 min-h-[calc(100vh-423px)]">
                <Outlet />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;