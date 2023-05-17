import './Busca.css'

import {api} from "../../services/api.js";
import React, {useEffect, useState} from "react";

import MovieCard from '../../components/MovieCard/MovieCard'

import { Link, useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import FormControl from '@mui/joy/FormControl';
import Autocomplete, { createFilterOptions } from '@mui/joy/Autocomplete';

function Busca() {

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genreList, setGenreList] = useState([])

  const navigate = useNavigate()

  const gotoDetails = (movie) => {
    navigate(`/Resultado/${movie.id}`);
  }

  const orderReleaseDate = () => {
    const orderMovies = [...movies].sort((a, b) => {
      a = a.releaseDate.split('/').reverse().join('');
      b = b.releaseDate.split('/').reverse().join('');
      return b > a ? 1 : b < a ? -1 : 0;
    })
    setMovies(orderMovies)
    console.log(orderMovies);
  }

  const getDiscoverList = async (name) => {
    const response = await api.get(`/movieFinder/discover/movie?genreId=${name.id}`)
    setMovies(response.data.results)
  }

  const orderMoviesByBestVote = () => {
    const orderMovies = [...movies].sort((a, b) => b.voteAverage - a.voteAverage)
    setMovies(orderMovies)
  }

  const orderMoviesByWorstVote = () => {
    const orderMovies = [...movies].sort((a, b) => a.voteAverage - b.voteAverage)
    setMovies(orderMovies)
  }

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.title,
  });

  const handleChange = async (event, inputValue) => {
    setQuery(inputValue);
    if (inputValue === '') {
      setMovies(popularMovies)
      return
    }
    const response = await findMovie(inputValue);
    setMovies(response);
  }

  const findMovie = async (query) => {
    const response = await api.get(`/movieFinder/movie_query/${query}`)
    return response.data.results;
  }

  const getPopularMovies = async () => {
    const response = await api.get('/movieFinder/movie/popularity')
    setMovies(response.data)
    setPopularMovies(response.data)
  }

  const getGenreList = async () => {
    const response = await api.get('/movieFinder/genre/list')
    setGenreList(response.data.genres)
  }

  useEffect(() => {
    getPopularMovies()
    getGenreList()
  }, [])

  return (
    <div className="search-body">
      <Sidebar
      className='sidebar-search-all'
      backgroundColor='rgba(255, 255, 255, 0)'
      >
        <Link to='/' title="Go to home">
          <h1>Movie Finder</h1>
        </Link>
        <Menu className='sidebar-menu-seach'>
          <FormControl id="filter-demo">
            <div className="teste">
              <Autocomplete
                className='teste'
                placeholder="Type something"
                options={movies}
                getOptionLabel={(option) => option.title || ''}
                filterOptions={filterOptions}
                inputValue={query}
                onInputChange={handleChange}
                style={{margin: "30px"}}
              />
            </div>
          </FormControl>
          <div className="sidebar-filter-search">
            <h2>Filtros</h2>
            <MenuItem onClick={orderReleaseDate}>Lançamentos</MenuItem>
            <SubMenu label="Generos" >
              {genreList.map((name) => (
                <MenuItem onClick={() => getDiscoverList(name)}>
                  <p>
                    {name.name}
                  </p>
                </MenuItem>
              ))}
            </SubMenu>
            <SubMenu label="Por nota">
              <MenuItem onClick={orderMoviesByBestVote}> Melhores avaliados </MenuItem>
              <MenuItem onClick={orderMoviesByWorstVote}> Piores avaliados </MenuItem>
            </SubMenu>
          </div>
            <div className="sidebar-favorite-search">
                <h3>Favoritos</h3>
                <MenuItem>Meus Favoritos</MenuItem>
                <MenuItem>Recomendados para você</MenuItem>
            </div>

        </Menu>
      </Sidebar>
      <div className='results-search'>
        <h1>Resultados</h1>
        <div className='results-search-cards'>
          {movies.map((movie) => movie.posterPath &&
            <div onClick={ () => gotoDetails(movie) }>
              <MovieCard movie={movie} posterSize="200px"/>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Busca
