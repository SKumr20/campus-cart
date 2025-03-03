import { createContext, useContext, useState, useEffect } from "react";
import checkAuth from "@/app/actions/checkAuth";


const AuthContext = createContext();

// provides data/context to components
// needs to wrap around components
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const checkAuthentication = async () => {
            const { isAuthenticated, user } = await checkAuth(); // checks if authenticated
            setIsAuthenticated(isAuthenticated);
            setCurrentUser(user);
        }

        checkAuthentication();
    }, []);
    
    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsAuthenticated,
            currentUser,
            setCurrentUser
        }}>
            { children }
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};