import logo from "../../assets/your-puneeth-logo.png";

const Header = () => {
    return (
      <div className="header">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header