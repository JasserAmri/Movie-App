import React from 'react';
import Item from './item';
import load from './Loading';

const Liste = ({content = [], onAddMovie = () => {}}) => {
    return (<div className="movie-list">
        {content.map((el, index) => <Item key={index} item={el} />)}
        <div
            className="new-movie-card"
            onClick={() => {onAddMovie({
                    title: prompt('Movie title: '),
                    rate: Number(prompt('Movie rating: ')),
                    src: prompt('Movie image path: '),
                    alt: prompt('Image title:'),
                    description: prompt('Movie Description'),
                })
            }} >
            <button>+</button>
        </div>
    </div>)
}
export default load(Liste);

