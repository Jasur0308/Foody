import './Footer.css'
import logo from '../../images/navbar-logo.svg'
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import github from '../../images/github.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <img src={logo} alt="" />
                    <ul className="footer__list">
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">about</a></li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">service</a></li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">blog</a></li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">contact us</a></li>
                    </ul>
                    <ul className="footer__webs__list">
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                        <li className="footer__list__item">
                            <a href="#" className="footer__link">
                                <img src={github} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom">
                    <a className='footer__bottom__link' href="#">© Copyright 2022, All Rights Reserved</a>
                    <div className="footer__bottom__links">
                        <a href="#" className="footer__bottom__link">Privacy Policy</a>
                        <a href="#" className="footer__bottom__link">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer