import PropTypes from "prop-types"
import StatisticsItem from "./StatisticsItem"
import s from './Statistics.module.css'


const Statistics = ({stats, title})=>{
    if (stats.length === 0) return null;
    return(
        <section className={s.statistics}>
            <h2 className={s.title}>{title ? title.toUpperCase() : title}</h2>
            <ul className={s['stat-list']}>
                
        {stats.map((stat)=>(
             <li key = {stat.id} className={s.item}>
        <StatisticsItem
        id={stat.id}
        label={stat.label}
        percentage={stat.percentage}
        /> 
        </li>
        ))}


    </ul>
    </section>
);}

Statistics.defaultProps = {
    stats: [],
  };


  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
  };

  export default Statistics;