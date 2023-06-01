import React from 'react';

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
        console.log('render the component');
        const {movies, onIncStars, onClickFav, onClickAddtocart, onDecStars} =  this.props
        const {title,plot,price,rating,stars,fav,isInCart,poster} = this.props.movies;
        return (
            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img alt='Poster' src={poster} />
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>Rs. {price}</div>
                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img className='str-btn' alt='decrease' src='https://cdn-icons-png.flaticon.com/128/43/43625.png' onClick={() => onDecStars(movies)}/>
                                <img className='stars' alt='star' src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png' />
                                <img className='str-btn' alt='increase' src='https://cdn-icons-png.flaticon.com/128/748/748113.png' onClick={() => onIncStars(movies)} />
                                <span>{stars}</span>
                            </div>
                            {/* {fav?<button className='unfavourite-btn' onClick={this.handleFav}>Un-favourite</button>:<button className='favourite-btn' onClick={this.handleFav}>Favourite</button>} */}
                            <button className={fav?'unfavourite-btn':'favourite-btn'} onClick={() => onClickFav(movies)}>{fav?'Un-favourite':'Favourite'}</button>
                            <button className={isInCart?'unfavourite-btn':'cart-btn'} onClick={() => onClickAddtocart(movies)}>{isInCart?'Remove From cart':'Add to cart'}</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default MovieCard;
