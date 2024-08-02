import "./Banner.css"
import banner from '../../images/banner.png'
import delivery from '../../images/delivery.svg'
import play from '../../images/play.svg'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner__wrapper">
                <div className="banner__content">
                    <h3 className="banner__main__title">
                        <span className="banner__main__title__text">Fast delivery</span>
                        <img src={delivery} alt="" />
                    </h3>
                    <h2 className="banner__title">Fastest <span className="banner__title__red">Delivery</span> & Esay <span className="banner__title__red">Pickup.</span></h2>
                    <p className="banner__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.</p>
                    <div className="banner__links">
                        <a className="banner__order" href="#">order now</a>
                        <a className="banner__video" href="#">
                            <div className="banner__play">
                                <div className="banner__play-2">
                                    <img src={play} alt="" />
                                </div>
                            </div>
                            <span className="video__title">Watch video</span>
                        </a>
                    </div>
                </div>
                <img className="banner__main__image" src={banner} alt="" />
            </div>
    </div>
  )
}

export default Banner