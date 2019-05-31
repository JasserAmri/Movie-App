import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card } from 'react-bootstrap';

class Item extends Component {
    render() {

        const { item } = this.props;
        return (<Card className="movie-card">
            <Card.Img variant="top" src={item.src} alt={item.alt} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div>
                    <h2>This movie is rated: {item.rate} Stars</h2>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={item.rate} />
                </div>
            </Card.Footer>
        </Card>
        );
    }
}

export default Item;
