import logo from '../images/logo.png';
function Navbar() {
    return (
      <div className="navbar">
        <img className="logo" src={logo} alt='plane'/>
        <h1>Kutay's Travel Book</h1>
      </div>
    );
  }
  
  export default Navbar;