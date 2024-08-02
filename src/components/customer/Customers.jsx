import CustomerCard from "../CustomerCard/CustomerCard";
import './Customers.css';
import left from '../../images/left.svg'
import right from '../../images/right.svg'

const Customers = ({ customers }) => {
  return (
    <div className='customers'>
      <div className="container">
        <div className="customers__wrapper">
          <div className="customers__top">
            <h3 className='customers__title'>What our customer <br /> say about this</h3>
            <div className="customers__top__arrows">
              <div className="left">
                <img src={left} alt="" />
              </div>
              <div className="right">
                <img src={right} alt="" />
              </div>
            </div>
          </div>
          <div className="customers__cards">
          {
            customers.map(customer => (
              <CustomerCard key={customer.id} customer={customer}/>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers;