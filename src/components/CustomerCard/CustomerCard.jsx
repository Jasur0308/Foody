import './CustomerCard.css'

const CustomerCard = ({customer}) => {
  return (
    <div className='customer__card'>
      <img className='stars' src={customer.rate} alt="" />
      <p className='customer__card__description'>{customer.description}</p>
      <div className="customer__card__user">
        <img src={customer.image} alt="" />
        <div className="user__content">
          <strong className='customer__name'>{customer.name}</strong>
          <span className='customer__job'>{customer.job}</span>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard