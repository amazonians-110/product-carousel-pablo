import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Carousel from './Carousel/Carousel.jsx';
import app from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relationship: 'Related items',
      products: [],
      pageNumber: 1,
      pages: null,
      productsPerPage: 4,
    };
  }

  componentWillMount() {
    this.fetchProducts()
      .then(() => {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth.bind(this));
      });
  }

  updateWidth() {
    const width = Math.max(window.innerWidth, 1000);
    const productsPerPage = Math.floor((width - 100) / 170);
    this.setState(({ products }) => ({
      productsPerPage,
      pages: Math.ceil(products.length / productsPerPage),
    }));
  }

  fetchProducts() {
    return axios.get('/category/05')
      .then(({ data }) => {
        this.setState({ products: data });
      });
  }

  render() {
    const {
      products, relationship, pageNumber, pages, productsPerPage,
    } = this.state;
    const firstIndex = productsPerPage * pageNumber;
    const lastIndex = productsPerPage * (pageNumber + 1);
    return (
      <section className={app.section}>
        <header className={app.header}>
          <h4 className={app.title}>
            {relationship}
          </h4>
          <h4 className={app.pages}>
            {`Page ${pageNumber} of ${pages}`}
          </h4>
        </header>
        <Carousel products={products.slice(firstIndex, lastIndex)} />
      </section>
    );
  }
}


// const dummyData = [
//   {
//     id: 6,
//     name: 'Dogfood',
//     image: 'https://images-na.ssl-images-amazon.com/images/I/81DNz45J01L._AC_UL160_SR160,160_.jpg',
//     price: '12.99',
//     avgReview: '4.2',
//     isPrime: 'f',
//     category: 'pet',
//     manufacturer: 'Purina',
//   },
//   {
//     id: 5,
//     name: 'Laptop',
//     image: 'https://images-na.ssl-images-amazon.com/images/G/01/pc/ac/es-home-white.jpg',
//     price: '99.99',
//     avgReview: '3.7',
//     isPrime: 't',
//     category: 'electronics',
//     manufacturer: 'Acer',
//   },
// ];

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
