import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import s from './TransactionHistory.module.css'


const TransactionHistory =({items})=>{
    if (items.length === 0) return null;
    return (
         <table className={s['transaction-history']}>
  <thead className={s['transaction-head']}>
     <tr>
       <th className={s['transaction-title']}>Type</th>
       <th className={s['transaction-title']}>Amount</th>
       <th className={s['transaction-title']}>Currency</th>
     </tr>
   </thead>
   <tbody>
       {items.map((item)=>(
         <tr key={item.id} className={s['transaction-row']} >
       <TransactionItem 
       id={items.id}
       type = {item.type}
       amount ={item.amount}
       currency= {item.currency}
       
        />
        </tr>
       ))}
   </tbody>

   </table>
    )
};

TransactionHistory.defaultProps = {
    transactions: [],
  };


TransactionHistory.propTypes = {
    
    transactions: PropTypes.array.isRequired,
  };

  export default TransactionHistory;