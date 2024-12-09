import { render } from '@testing-library/react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import './Style.css';


test('renders learn react link', () => {
  render(<Header />);
  render(<Login />);
  render(<Footer />);
  render(<Home />);
  render(<Register />);

});
