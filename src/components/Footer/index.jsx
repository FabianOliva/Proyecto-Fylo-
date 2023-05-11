const Footer = (props) => {
  return (
    <>
      <footer>
        <div className="footer_top">
          <img className="Logo FooterLogo" src="icons\logo.svg" alt="Logo" />
        </div>
        <div className="footer_bottom">
          <div className="footer_location">
            <img src="icons\icon-location.svg" alt="locationLogo" />
            <p>{props.location}</p>
          </div>
          <div className="footer_contact">
            <div className="footer_contact1">
              <img src="icons\icon-phone.svg" alt="phoneicon" />
              <p>{props.phone}</p>
            </div>
            <div className="footer_contact2">
              <img src="icons\icon-email.svg" alt="emailicon" />
              <p>{props.email}</p>
            </div>
          </div>
          <div className="footer_nav">
            <ul className="ul_left">
              <li>
                <a className="ul_a" href="">
                  About us
                </a>
              </li>
              <li>
                <a className="ul_a" href="">
                  Jobs
                </a>
              </li>
              <li>
                <a className="ul_a" href="">
                  Press
                </a>
              </li>
              <li>
                <a className="ul_a" href="">
                  Blog
                </a>
              </li>
            </ul>
            <ul className="ul_right">
              <li>
                <a className="ul_a" href="">
                  Contact us
                </a>
              </li>
              <li>
                <a className="ul_a" href="">
                  Terms
                </a>
              </li>
              <li>
                <a className="ul_a" href="">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_social">
            <a href="#" className="social">
              <img src="icons\facebook.svg" alt="facebookicon" />
            </a>
            <a href="#" className="social">
              <img src="icons\twitter.svg" alt="twittericon" />
            </a>
            <a href="#" className="social">
              <img src="icons\instagram.svg" alt="instagramicon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
