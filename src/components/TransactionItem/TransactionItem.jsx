// Данные для списка доступны в формате JSON в файле transactions.json. Это массив объектов, каждый объект описывает одну транзакцию со следующими свойствами:

// id — уникальный идентификатор транзакции
// type — тип транзакции
// amount - сумма транзакции
// currency - тип валюты



// Необходимо создать компонент <TransactionHistory> принимающий один проп items - массив объектов транзакций из transactions.json. Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. В примере приведена разметка двух транзакций.


// Пример использования
// import transactions from 'путь/к/transactions.json';

// <TransactionHistory items={transactions} />;
import PropTypes from "prop-types";
import s from './TransactionItem.module.css'


const TransactionItem =({id, type, amount, currency}) => {
    return (
        
        < >
          <td className={s.cell}>{type}</td>
          <td className={s.cell}>{amount}</td>
          <td className={s.cell}>{currency}</td>
        </>
      

);} 

TransactionItem.prototype ={
    id: PropTypes.string,
    type: PropTypes.string,
    amount :PropTypes.string,
    currency:PropTypes.string,
};



export default TransactionItem;