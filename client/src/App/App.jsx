import React from 'react';
import axios from 'axios';
import Carousel from './Carousel/Carousel.jsx';
import app from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
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
    this.setState(({ products }) => {
      let x = 0;
      x = 1;
      // if page was widened too far and current page is greater than total pages
      // update page to match the total pages
      return {
        productsPerPage,
        pages: Math.ceil(products.length / productsPerPage),
      };
    });
  }

  fetchProducts() {
    return axios.get('/category/05')
      .then(({ data }) => {
        this.setState({ products: data });
      });
  }

  handleScroll(direction) {
    console.log(direction);
    // if direction is true
    // --> if page = pages, set to 1
    // otherwise increment page

    // if direction is false
    // --> if page is 1, set to pages
    // --> otherwise, deincrement page
  }

  handleClick(e) {
    console.log(e);
    // harvest id value from element
    // navigate to the correct path
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
        <Carousel
          products={products.slice(firstIndex, lastIndex)}
          click={this.handleClick}
          scroll={this.handleScroll}
        />
      </section>
    );
  }
}

export default App;
