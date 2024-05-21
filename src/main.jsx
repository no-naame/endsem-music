// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './App.jsx';
import {Bodyy} from "@/components/main/bodyy.jsx";
import SignUp from "@/components/auth/SignUp.jsx";
import LogIn from "@/components/auth/Login.jsx";
import './index.css';
import MusicContext from "@/components/context/MusicContext.jsx";
import { NextUIProvider } from '@nextui-org/react';
import { AuthProvider } from "@/components/context/AuthContext";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Bodyy /> },
            { path: "/signup", element: <SignUp /> },
            { path: "/login", element: <LogIn /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NextUIProvider>
            <MusicContext>
                <AuthProvider>
                    <RouterProvider router={appRouter} />
                </AuthProvider>
            </MusicContext>
        </NextUIProvider>
    </React.StrictMode>,
);
