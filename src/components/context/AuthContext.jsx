import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import appRouter from "@/main.jsx";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [isLoggedIn,setIsLoggedIn] = useState(false)
    useEffect(() => {
        const savedUser = localStorage.getItem('token')
        if (savedUser) {
            setUser(savedUser);
        } else {
            console.log("User not logged in")
        }
    }, []);

    const handleSignUp = async (name, email, password) => {
        try {
            const response = await axios.post('https://academics.newtonschool.co/api/v1/user/signup', {
                name,
                email,
                password,
                appType: "music"
            }, {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk',
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem("token",response.data.token)
            setUser(response.data.token);
            setIsLoggedIn(true)
            appRouter.navigate('/');
            console.log(response.data.token);
        } catch (err) {
            console.error(err);
            throw new Error("Sign-up failed");
        }
    };
    const handleLogin = async (email,password) => {
        try {
            const response = await axios.post('https://academics.newtonschool.co/api/v1/user/login', {
                email,
                password,
                appType: "music"
            }, {
                headers: {
                    'accept': 'application/json',
                    'projectID': 'bng7dtu7whwk',
                    'Content-Type': 'application/json'
                }
            });
            console.log(response)
            localStorage.setItem("token",response.data.token)
            setUser(response.data.token);
            setIsLoggedIn(true)
            appRouter.navigate('/');
            console.log(response.data.token);

        } catch (err) {
            console.error(err);
            setError("Login failed. Please try again.");
        }
    };

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, handleSignUp, login, logout, handleLogin,isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
