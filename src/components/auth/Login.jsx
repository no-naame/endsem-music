import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
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
            console.log(response.data);
        } catch (err) {
            console.error(err);
            setError("Login failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center p-4">
            <div className="w-full max-w-md bg-black bg-opacity-25 rounded-xl p-8">
                <h1 className="text-white font-bold text-4xl mb-1">Musica</h1>
                <h2 className="text-white text-3xl font-semibold mb-4">Log In</h2>
                <form onSubmit={handleLogin}>
                    <Input
                        className="mb-4 bg-white"
                        id="email"
                        placeholder="Email address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        className="mb-4 bg-white"
                        id="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="w-full bg-purple-700 text-white py-2 rounded-lg mb-2" type="submit">
                        Log In
                    </Button>
                </form>
                {error && <div className="text-red-500 mt-4">{error}</div>}
                <div className="text-center mt-4">
                    <Link className="text-white opacity-75 text-xs" to="/signup">
                        Don't Have an Account? Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
}
