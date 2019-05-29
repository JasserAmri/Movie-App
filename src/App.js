import React, { Component } from 'react';
import database from './database';
import Liste from './liste';
import './App.css';
import StarRatingComponent from 'react-star-rating-component';
import NewMovie from './addMovie';






class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered: database,
      keyword: '',
      rating: null,
    }
  }

  handlechange = (event) => {
    this.setState({ keyword: event.target.value })
    this.setState({ filtered: database.filter((el, i) => el.title.toLocaleLowerCase().indexOf(event.target.value) > -1 && el.rate >= this.state.rating) })
  }
  onStarClick = (nextValue) => {
    this.setState({ rating: nextValue })
    this.setState({ filtered: database.filter((el, i) => el.title.toLocaleLowerCase().indexOf(this.state.keyword) > -1 && el.rate >= nextValue) })
  }
  addNewMovie = (newMovie) => {
    this.setState({
      filtered: this.state.filtered.concat(newMovie)
    })
    database.push(newMovie)  
  }

  render() {
    const { rating } = this.state;
    return (<div className="App container">
      <div className='search-bar container'>
        <h1>Search</h1>
        <input placeholder='Search' type='text' onChange={this.handlechange} />
        <h2> Filter movies rated by: {rating} Stars</h2>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={rating}
          onStarClick={this.onStarClick}
        />
      </div>
      <NewMovie />
      <Liste content={this.state.filtered} onAddMovie={(newMovie) => this.addNewMovie(newMovie)} />

    </div>

    );
  }
}

export default App;
