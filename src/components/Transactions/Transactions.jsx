import PropTypes from "prop-types";
import css from "./Transactions.module.css";

export function Transactions({ props }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {props.map(prop => (
          <tr key={prop.id} className={css.tableString}>
            <td className={css.tableCell}>{prop.type}</td>
            <td className={css.tableCell}>{prop.amount}</td>
            <td className={css.tableCell}>{prop.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  props: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  })).isRequired,
}