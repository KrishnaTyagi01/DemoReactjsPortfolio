import React from 'react'
import Sticky from 'react-sticky-el';
const Footer = () => {
  return(
      <>
        <footer style={{background:"#042758"}} className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12" style={{marginTop:"-25px"}}>
                <h5 className="white-text">Contact Details</h5>
                <p className="grey-text text-lighten-4">Email: <span>tyagikrishna38@gmail.com</span></p>
                <p className="grey-text text-lighten-4">Phone: <span>xxxxxxxxxx</span></p>
              </div>
              <div className="col l4 offset-l2 s12">
                <ul className="footerul">
                <li className="footListItem" ><a className=" footerLink grey-text text-lighten-3" href="https://github.com/KrishnaTyagi01" target="_black"><i className="fab fa-github"></i></a></li>
            <li className="footListItem"><a className=" footerLink grey-text text-lighten-3" href="https://www.instagram.com/tyagi_krishna01/" target="_black"><i className="fab fa-instagram"></i></a></li>
            <li className="footListItem"><a className=" footerLink grey-text text-lighten-3" href="https://www.linkedin.com/in/krishna-tyagi-62875419b/" target="_black"><i className="fab fa-linkedin-in"></i></a></li>
            <li className="footListItem"><a className=" footerLink grey-text text-lighten-3" href="https://www.facebook.com/profile.php?id=100008424911875" target="_black"><i className="fab fa-facebook-f"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Krishna Tyagi
            
            </div>
          </div>
        </footer>
      </>
  )

}

export default Footer;
