import React from 'react';
import cardStyle from './movieCard.module.css'

class MovieCard extends React.Component {
    
    //either use bind method or use arrow function and another we can bind in function call time or in constructor also ..there are three way to bind..
    // increaseStars=()=>{
    //     // console.log(this.state);
    //     //form1
    //     // this.setState({
    //     //     stars:this.state.stars+0.5,
    //     // },()=>{console.log('inside callback',this.state.stars)});
    //     // this.setState({
    //     //     stars:this.state.stars+0.5,
    //     // },()=>{console.log('inside callback',this.state.stars)});
    //     // this.setState({
    //     //     stars:this.state.stars+0.5,
    //     // },()=>{console.log('inside callback',this.state.stars)});
    //     //in the above case react batch all the setstate and render only once the last setstate render
    //     //form2
    //     // this.setState((prevState)=>{
    //     //     return{
    //     //         stars:prevState.stars+0.5
    //     //     }
    //     // });
    //     //or
    //     if(this.state.stars>=5){
    //         return;
    //     }
    //     this.setState((prevState)=>({stars:prevState.stars+0.5}),()=>{console.log('inside callback',this.state.stars)});
    //     // this.setState((prevState)=>({stars:prevState.stars+0.5}),()=>{console.log('inside callback',this.state.stars)});
    //     // this.setState((prevState)=>({stars:prevState.stars+0.5}),()=>{console.log('inside callback',this.state.stars)});
    //     //in the second form of setstate it render three times and calculated all the the setstate value. it alwase storethe priveous value and calculated
    //     //because of asynchronous call if we get the current value then pass the callback function inside setstate
    //     console.log('stars:',this.state.stars)
    // }
    // decreaseStars=()=>{
    //     if(this.state.stars<=0){
    //         return;
    //     }
    //     this.setState((prevState)=>({stars:prevState.stars-0.5}));
    // };
    
    // handleFav =()=>{
    //     this.setState({
    //         fav:!this.state.fav
    //     })
    // }
    // handleCart = ()=>{
    //     this.setState({
    //         isInCart:!this.state.isInCart
    //     })
    // }

    render() {
        // console.log('render the component');
        const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  this.props
        const {title,plot,price,rating,stars,fav,isInCart,poster} = this.props.movies;
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
                                <img className={cardStyle.strBtn} alt='decrease' src='https://cdn-icons-png.flaticon.com/128/43/43625.png' onClick={() => onDecStars(movies)}/>
                                <img className={cardStyle.stars} alt='star' src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png' />
                                <img className={cardStyle.strBtn} alt='increase' src='https://cdn-icons-png.flaticon.com/128/748/748113.png' onClick={() => onIncStars(movies)} />
                                <span>{stars}</span>
                            </div>
                            {/* {fav?<button className='unfavourite-btn' onClick={this.handleFav}>Un-favourite</button>:<button className='favourite-btn' onClick={this.handleFav}>Favourite</button>} */}
                            <button className={fav?cardStyle.unfavouriteBtn:cardStyle.favouriteBtn} onClick={() => onClickFav(movies)}>{fav?'Un-favourite':'Favourite'}</button>
                            <button className={isInCart?cardStyle.unfavouriteBtn:cardStyle.favouriteBtn} onClick={() => onClickAddtocart(movies)}>{isInCart?'Remove From cart':'Add to cart'}</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default MovieCard;
