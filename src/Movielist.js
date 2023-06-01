import React, { Component } from 'react';
import MovieCard from './Moviecard';

export default class Movielist extends Component {
    constructor() {
        super();
        this.state = {
            title:'ASUR 2',
            plot:'Threeler Movie with lots of Comedy',
            price:199,
            rating:8.9,
            stars:0,
            fav:false,
            isInCart:false
        }
        // this.increaseStars = this.increaseStars.bind(this);
    }
    render() {
        const {title,plot,price,rating,stars,fav,isInCart} = this.state;
        return (
            <div>
            <MovieCard title={title} plot={plot} price={price} rating={rating} stars={stars} fav={fav} isInCart={isInCart}/>
            
            </div>
        )
    }
}
