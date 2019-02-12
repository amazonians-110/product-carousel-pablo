import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carousel from './Carousel/Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relationship: 'Related Items',
      products: [
        {
          id: 6,
          name: 'dogfood',
          image: 'https://images-na.ssl-images-amazon.com/images/I/81DNz45J01L._AC_UL160_SR160,160_.jpg',
          price: '12.99',
          avgReview: '4.2',
          isPrime: 'f',
          category: 'pet',
          manufacturer: 'Purina',
        },
        {
          id: 5,
          name: 'laptop',
          image: 'https://images-na.ssl-images-amazon.com/images/G/01/pc/ac/es-home-white.jpg',
          price: '99.99',
          avgReview: '3.7',
          isPrime: 't',
          category: 'electronics',
          manufacturer: 'Acer',
        },
      ],
    };
  }

  componentDidMount() {
    // this.fetchProducts();
  }

  fetchProducts() {
    axios.get('localhost:3007/category/product/05')
      .then((data) => {
        console.log(data);
        this.setState({ products: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { products, relationship } = this.state;
    return (
      <div>
        <div className="header">
          <h4 className="carousel_type">
            {relationship}
          </h4>
          <h4>
            page 1 of 2
          </h4>
        </div>
        <Carousel products={products} />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
