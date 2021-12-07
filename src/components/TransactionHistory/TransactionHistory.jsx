import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";


const TransactionHistory =({items})=>{
    if (items.length === 0) return null;
    return (
         <table className="transaction-history">
  <thead>
     <tr>
       <th>Type</th>
       <th>Amount</th>
       <th>Currency</th>
     </tr>
   </thead>
   <tbody>
       {items.map((item)=>(
       <TransactionItem 
       id={items.id}
       type = {item.type}
       amount ={item.amount}
       currency= {item.currency}
       
        />
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