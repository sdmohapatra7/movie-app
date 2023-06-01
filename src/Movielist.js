import React, { Component } from 'react';
import MovieCard from './Moviecard';

export default class Movielist extends Component {
    render() {
        return (
            <div>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            </div>
        )
    }
}
