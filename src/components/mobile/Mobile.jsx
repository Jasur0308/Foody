import './Mobile.css'
import mobile from '../../images/mobile.png'
import apple from '../../images/apple.svg'
import playMarket from '../../images/play-market.svg'

const Mobile = () => {
  return (
    <div className='mobile'>
        <div className="container">
            <div className="mobile__wrapper">
                <div className="mobile__content">
                    <h3 className="mobile__title">Download our Mobile App</h3>
                    <p className="mobile__description">Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                        elit. Luctus cum purus bibendum risus nibh cursus <br />
                         integer dolor, commodo. Amet, aliquam <br />
                          condimentum.
                    </p>
                    <div className="mobile__links">
                        <a href="#">
                            <img src={apple} alt="" />
                        </a>
                        <a href="#">
                            <img src={playMarket} alt="" />
                        </a>
                    </div>
                </div>
                <img src={mobile} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Mobile