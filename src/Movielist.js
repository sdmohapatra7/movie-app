import React, { Component } from 'react';
import MovieCard from './Moviecard';


export default class Movielist extends Component {
    
    render() {
        // const {title,plot,price,rating,stars,fav,isInCart} = this.state;
        const { movies,onIncStars,onDecStars,onClickFav,onClickAddtocart } = this.props;

        return (
            <div>
                {movies.map((movie,id) => (
                <MovieCard movies={movie}
                    onIncStars={onIncStars}
                    onDecStars={onDecStars}
                    onClickFav={onClickFav}
                    onClickAddtocart={onClickAddtocart}
                    key={id}
                />))}

            </div>
        )
    }
}
