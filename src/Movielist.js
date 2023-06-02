import React from 'react';
import MovieCard from './Moviecard';


const Movielist = (props) => {


    // const {title,plot,price,rating,stars,fav,isInCart} = state;
    const { movies, onIncStars, onDecStars, onClickFav, onClickAddtocart } = props;

    return (
        <div>
            {movies.map((movie, id) => (
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
export default Movielist;
