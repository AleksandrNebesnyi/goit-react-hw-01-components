// Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

// title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
// stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
// Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
// Компонент должен создавать DOM элемент следующей структуры.

import PropTypes from "prop-types";
import s from "./StatisticItem.module.css";
const StatisticsItem = ({ label, percentage, id }) => {
  return (
    <li key={id} className={s.item}>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.prototype = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsItem;
