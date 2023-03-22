import PropTypes from 'prop-types';
export const Statistic = ({ item: { label, percentage } }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};
Statistic.propTypes = {
  item: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

//  <section class="statistics">
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
// </section>;
// }
