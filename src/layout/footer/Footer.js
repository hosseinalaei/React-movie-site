import { Link } from "react-router";
import Style from "./style";

function Footer() {
  return (
    <>
      <Style>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-content">
                  <Link to="/">
                    <img src="/assets/images/logo/logo.svg" alt="logo" />
                  </Link>
                  {/* <nav> */}
                  <Link to="/">Home</Link>
                  <Link to="/categories">Categories</Link>
                  {/* </nav> */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Style>
    </>
  );
}

export default Footer;
