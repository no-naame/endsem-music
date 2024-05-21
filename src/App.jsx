import { Outlet } from 'react-router-dom';
import Header from "@/components/main/Header.jsx";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

export default AppLayout;
