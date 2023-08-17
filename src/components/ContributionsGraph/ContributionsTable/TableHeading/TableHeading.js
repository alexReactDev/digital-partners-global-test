import getShortMonth from "../../../../utils/getShortMonth";
import styles from "./TableHeading.module.css";

export default function TableHeading() {
	const initialDate = new Date().getTime() - 2629743000 * 11;

	function returnMonths() {
		const months = [];

		for (let i = 0; i < 12; i++) {
			const month = new Date(initialDate + 2629743000 * i).getMonth();
			
			months.push(
				<td className={styles.cell}>
					{getShortMonth(month)}
				</td>
			)
		}

		return months;
	}

	return (
		<tr className={styles.row}>
			{returnMonths()}
		</tr>
	)
}