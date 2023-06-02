import React from 'react';
import cardStyle from './movieCard.module.css'

const MovieCard = (props) => {
    // console.log('render the component');
    const { movies, onIncStars, onClickFav, onClickAddtocart, onDecStars } = props
    const { title, plot, price, rating, stars, fav, isInCart, poster } = props.movies;
    return (
        <div className={cardStyle.main}>
            <div className={cardStyle.movieCard}>
                <div className={cardStyle.left}>
                    <img alt='Poster' src={poster} />
                </div>
                <div className={cardStyle.right}>
                    <div className={cardStyle.title}>{title}</div>
                    <div className={cardStyle.plot}>{plot}</div>
                    <div className={cardStyle.price}>Rs. {price}</div>
                    <div className={cardStyle.footer}>
                        <div className={cardStyle.rating}>{rating}</div>
                        <div className={cardStyle.starDis}>
                            <img className={cardStyle.strBtn} alt='decrease' src='https://cdn-icons-png.flaticon.com/128/43/43625.png' onClick={() => onDecStars(movies)} />
                            <img className={cardStyle.stars} alt='star' src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png' />
                            <img className={cardStyle.strBtn} alt='increase' src='https://cdn-icons-png.flaticon.com/128/748/748113.png' onClick={() => onIncStars(movies)} />
                            <span>{stars}</span>
                        </div>
                        {/* {fav?<button className='unfavourite-btn' onClick={this.handleFav}>Un-favourite</button>:<button className='favourite-btn' onClick={this.handleFav}>Favourite</button>} */}
                        <button className={fav ? cardStyle.unfavouriteBtn : cardStyle.favouriteBtn} onClick={() => onClickFav(movies)}>{fav ? 'Un-favourite' : 'Favourite'}</button>
                        <button className={isInCart ? cardStyle.unfavouriteBtn : cardStyle.favouriteBtn} onClick={() => onClickAddtocart(movies)}>{isInCart ? 'Remove From cart' : 'Add to cart'}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default MovieCard;
