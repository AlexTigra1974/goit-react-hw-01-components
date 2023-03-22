import PropTypes from 'prop-types';
import { Statistic } from './Statistic';

export const StatisticsList = ({ items }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map(item => (
          <li
            className="item"
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Statistic item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
