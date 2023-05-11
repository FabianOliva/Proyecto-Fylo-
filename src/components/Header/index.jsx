const Header = (props) => {
  return (
    <header>
      <nav id="Nav">
        <div className="Nav_Logo">
          <img href="index.html" className="Logo" src="icons\logo.svg" alt="LogoImg" />
        </div>
        <div className="Nav_Assets">
          <a href="#" className="Nav_Asset">
            {props.asset1}
          </a>
          <a href="#" className="Nav_Asset">
            {props.asset2}
          </a>
          <a href="#" className="Nav_Asset">
            {props.asset3}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
