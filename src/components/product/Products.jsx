import Card from '../card/Card'
import './Products.css'

const Products = ({products}) => {
  return (
    <div className='product'>
      <div className="container">
        <div className="product__wrapper">
          <h3 className='product__title'>Special Menu for you</h3>
          <p className="product__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus <br />
              nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
          </p>
          <div className="product__cards">
          {
            products.map(product => 
              <Card key={product.id} product={product}/>
            )
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products