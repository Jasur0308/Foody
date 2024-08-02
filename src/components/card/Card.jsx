import './Card.css'
import like from '../../images/like.svg'
import star from '../../images/star.svg'
import bike from '../../images/bike.svg'
import time from '../../images/time.svg'

const Card = ({product}) => {
  return (
    <div className='product__card'>
        <img className='product__image' src={product.image} alt="" />
          <button className="product__image__like">
            <img src={like} alt="" />
          </button>
        <div className="product__content">
          <div className="product__card__top">
            <h3 className='product__card__title'>{product.name}</h3>
            <div className="product__card__top__right">
              <img src={star} alt="" />
              <p className='product__card__rate'>{product.rate}</p>
            </div>
          </div>
          <div className="product__card__middle">
            <div className="product__card__middle__left">
              <img src={bike} alt="" />
              <span className='product__card__service'>{product.service}</span>
            </div>
            <div className="border"></div>
            <div className="product__card__middle__right">
              <img src={time} alt="" />
              <p className='product__card__time'>{product.time}</p>
            </div>
          </div>
          <div className="card__link">
            <a className='product__card__link' href="#">order now</a>
          </div>
        </div>
    </div>
  )
}

export default Card