import PropTypes from "prop-types"
import StatisticsItem from "./StatisticsItem"


const Statistics = ({stats, title})=>{
    if (stats.length === 0) return null;
    return(
        <section className="statistics">
            <h2 className="title">{title ? title.toUpperCase() : title}</h2>
            <ul className="friend-list">
        {stats.map((stat)=>(<StatisticsItem
        id={stat.id}
        label={stat.label}
        percentage={stat.percentage}
        /> 
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