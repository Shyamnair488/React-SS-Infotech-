import Footer from './Footer';
import Header from './Header';
import './Style.css';

function Login() {
  return (
    <div>
      <Header />
      <form>
      <div className="Login">
        <div className="Login_header">
          <div className="Login_box">
            <h1 className="Login-title">Login Page</h1>
            <div className="Content">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="Content">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="Button">
              <button type="submit" onClick={() => alert('Login successful')}>
                Login
              </button>
              <button type="button" onClick={() => alert('Forgot Password Clicked')}>
                Forgot Password
              </button>
              <button type="button" onClick={() => alert('Registered') }>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
