import React, { Component } from 'react';
import Movielist from './Movielist';
import Navbar from './Navbar';
import { movies } from './movieData';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount:0
    }
    // this.increaseStars = this.increaseStars.bind(this);
  }
  handleAddStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);
    // console.log(movieId);
    if (movies[movieId].stars < 5) {
      movies[movieId].stars += 0.5
      
    }

    this.setState({
      movies
    });
  }

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    if (movies[movieId].stars > 0) {
      movies[movieId].stars -= 0.5;
      // console.log(movies[movieId].stars)
    }

    this.setState({
      movies
    })

  }

  handleToggleFav = (movie) => {
    const { movies } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].fav = !movies[movieId].fav;

    this.setState({
      movies
    })
  }

  handleAddtocart = (movie) => {
    let { movies,cartCount } = this.state;
    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart = !movies[movieId].isInCart;
    console.group(movies[movieId].isInCart)
    if(movies[movieId].isInCart){
      cartCount = cartCount+ 1;
    }else{
      cartCount -= 1;
    }
    console.log(cartCount)
    this.setState({
      movies,
      cartCount
    })
  }

  render() {
    const {movies,cartCount} = this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <Movielist movies={movies}
        onIncStars={this.handleAddStars}
        onDecStars={this.handleDecStars}
        onClickFav={this.handleToggleFav}
        onClickAddtocart={this.handleAddtocart}/>
      </>
    )
  }
}
