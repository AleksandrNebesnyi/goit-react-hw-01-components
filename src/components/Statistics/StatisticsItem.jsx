// Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
// Компонент должен создавать DOM элемент следующей структуры.

// <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </section>
// Пример использования
// import data from '/путь/к/data.json';

// <Statistics title="Upload stats" stats={data} />;
// <Statistics stats={data} />;
import PropTypes from "prop-types";
const StatisticsItem = ({label ,percentage, id}) =>{
    return (
        
        <li key = {id} className="item">
       <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
     </li>
     
    );
};


StatisticsItem.prototype = {
    id : PropTypes.string,
    label: PropTypes.string,
    percentage : PropTypes.number,
};

export default StatisticsItem;