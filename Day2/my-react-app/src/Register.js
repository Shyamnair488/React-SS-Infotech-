import Footer from './Footer';
import Header from './Header';
import './Style.css';
function Register() {
    return (
        <div>
            <Header />
            <div className="register">
                <div className="register-header">
                    <h1 className="register-title">Register Page</h1>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" />
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" />
                    </div>
                    <div>
                        <label htmlFor='DOB'>Date of Birth:</label>
                        <input type="date" id="DOB" name="DOB" />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input type="password" id="confirm-password" name="confirm-password" />
                    </div>
                    <button type="submit" onClick={() => alert('Registration successful {username}')}>Register</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;