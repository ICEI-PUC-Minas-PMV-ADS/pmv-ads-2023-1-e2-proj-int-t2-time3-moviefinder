import {createContext, useEffect, useState} from "react";
import {api} from "../services/api.js";
import Cookies from "js-cookie"

export const AuthContext = createContext({})

export function AuthProvider({children}) {

    const [userDto, setUserDto] = useState(null);
    const [authenticated, setIsAuthenticated] = useState(false);
    const [starfill, setStarfill] = useState(false);

    useEffect(() => {
        const getUserInformation = async () => {
            const token = Cookies.get('moviefinder-token');
            if (token) {
                try {
                    const response = await api.get('/movieFinder/informacoesusuario/',
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                    setUserDto(response.data);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        getUserInformation();
    }, []);

    function changeName(nome) {
        setUserDto({
            ...userDto, 
            nome,
        })
    }

    async function logIn(emailLogin, passwordLogin) {
        const response = await api.post('/movieFinder/login', {
            email: emailLogin,
            senha: passwordLogin
        });

        setIsAuthenticated(true);
        setUserDto(response.data.data)

        Cookies.set('moviefinder-token', response.data.token.token, {expires: 2})
        localStorage.setItem("user", JSON.stringify(response.data.data))
        return response.data;
    }

    function logOut() {
        Cookies.remove('moviefinder-token');
        localStorage.removeItem("user");

        setIsAuthenticated(false);
        setUserDto(null);
    }

    async function favoriteMovie(movie) {
        const token = Cookies.get('moviefinder-token');
        const response = await api.get(`/movieFinder/favoritarFilme/${movie.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });

        setStarfill(true)
    }

    async function unfavoriteMovie(movie) {
        const token = Cookies.get('moviefinder-token');
        const response = await api.get(`/movieFinder/desfavoritarFilme/${movie.id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
        setStarfill(false)
    }

    async function isFavorite(movie) {
        const token = Cookies.get('moviefinder-token');
        const response = await api.get(`/movieFinder/isFilmeFavoritado/${movie.id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        setStarfill(response.data)
    }

    return (
        <AuthContext.Provider value={{ authenticated, logIn, logOut, userDto, isFavorite, changeName, favoriteMovie, unfavoriteMovie, starfill }}>
            {children}
        </AuthContext.Provider>
    )
}
