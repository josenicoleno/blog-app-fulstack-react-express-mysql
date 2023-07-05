import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/login", inputs)
        const {token, ...other}  = res?.data
        if (res.status === 200) {
            document.cookie = `access_token=${token};`
            setCurrentUser(other)
        }
    }

    const logout = async (inputs) => {
        const res = await axios.post("http://localhost:8800/api/auth/logout", inputs)
        if (res.status === 200) {
            document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            setCurrentUser(res.data)
        }
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

