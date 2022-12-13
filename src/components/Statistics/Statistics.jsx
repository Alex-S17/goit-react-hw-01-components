import PropTypes from "prop-types";
import css from "./Statistics.module.css";

function getRandom(min = 100, max = 255){
  let colorNumber;
  let arrayOfColorNumbers = [];
  for (let i = 0; i < 3; i += 1) {
    colorNumber = (Math.ceil(Math.random() * (max - min) + min));
    arrayOfColorNumbers.push(colorNumber);
  }
  return `rgb(${arrayOfColorNumbers[0]}, ${arrayOfColorNumbers[1]}, ${arrayOfColorNumbers[2]})`;
}

export function Statistics({ title, props }) {
  return (
    <section className={css.statistics}>
      {title && (<h2 className={css.title}>{title}</h2>)}

      <ul className={css.statList}>
        {props.map(prop => (
          <li key={prop.id} className={css.item} style={{ backgroundColor: getRandom() }}>
            <span className={css.label}>{prop.label}</span>
            <span className={css.percentage}>{prop.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  props: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  })).isRequired,
}



