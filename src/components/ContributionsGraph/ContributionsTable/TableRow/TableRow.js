import getMonth from "../../../../utils/getMonth.js";
import getShortWeekDay from "../../../../utils/getShortWeekDay.js";
import getWeekDay from "../../../../utils/getWeekDay.js";
import TableCell from "../TableCell/TableCell.js";
import styles from "./TableRow.module.css";

export default function TableRow({ initialDate, contributions }) {

	const date = new Date(initialDate);

	function renderCells() {
		const cells = [];

		for (let i = 0; i < 51; i++) {
			const date = new Date(initialDate + 604800000 * i);

			const value = contributions[date.toISOString().match(/.+?(?=T)/)] || 0;

			cells.push(
				<TableCell value={value} cellKey={date}>
					<div className={styles.label}>
						<p className={styles.label__title}>
							{value} contributions
						</p>
						<p className={styles.label__text}>
							{`${getWeekDay(date.getDay())}, ${getMonth(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`}
						</p>
					</div>
				</TableCell>
			)
		}

		return cells;
	}

	return (
		<tr className={styles.row}>
			<tr className={styles.weekDay}>
				{
					(date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5)
					&&
					<p>
						{getShortWeekDay(date.getDay())}
					</p>
				}
			</tr>
			{renderCells()}
		</tr>
	)
}