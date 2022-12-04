// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="nav-logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="header-nav-logo"
      />
      <div className="logout-container">
        <button type="button" className="logout-icon">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-logout-icon"
          />
        </button>
        <ul className="nav-links-lg-container">
          <li className="nav-link">Home</li>
          <li className="nav-link">Product</li>
          <li className="nav-link">Cart</li>
          <li className="nav-logout-btn">
            <button type="button" className="nav-logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className="nav-icons-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        className="nav-icon"
        alt="nav home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        className="nav-icon"
        alt="nav products"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="nav-icon"
        alt="nav cart"
      />
    </div>
  </nav>
)

export default Header
