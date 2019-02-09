// eslint-disable-next-line import/extensions
import Carousel from './modules/Carousel.jsx';

const React = require('react');
const ReactDOM = require('react-dom');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relationship: 'Related Items',
      relatedProducts: [
        {
          id: 5,
          name: 'laptop',
          image: 'http://loremflickr.com/160/160/dogs',
          price: '99.99',
          avg_review: '3.7',
          is_prime: 't',
          category: 'electronics',
          manufacturer: 'Acer',
        },
      ],
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    axios.get('localhost:3007/category/product/05')
      .then((data) => {
        console.log(data);
        this.setState({ relatedProducts: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { relatedProducts, relationship } = this.state;
    return (
      <div>
        <div className="header">
          <h4>
            {relationship}
          </h4>
          <h4>
            page 1 of 2
          </h4>
        </div>
        <Carousel data={relatedProducts} />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
