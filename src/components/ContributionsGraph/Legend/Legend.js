import TableCell from "../ContributionsTable/TableCell/TableCell.js";
import styles from "./Legend.module.css";

export default function Legend() {
	return (
		<ul className={styles.legend}>
			<li className={styles.item}>
				<p className={styles.text}>
					Меньше
				</p>
			</li>
			<ul className={styles.list}>
				<li className={styles.item}>
					<TableCell value={0} cellKey={0}>
						<p className={styles.popover__text}>
							No contributions
						</p>
					</TableCell>
				</li>
				<li className={styles.item}>
					<TableCell value={1} cellKey={1}>
						<p className={styles.popover__text}>
							1-9 contributions
						</p>
					</TableCell>
				</li>
				<li className={styles.item}>
					<TableCell value={10} cellKey={10}>
						<p className={styles.popover__text}>
							10-19 contributions
						</p>
					</TableCell>
				</li>
				<li className={styles.item}>
					<TableCell value={20} cellKey={20}>
						<p className={styles.popover__text}>
							20-29 contributions
						</p>
					</TableCell>
				</li>
				<li className={styles.item}>
					<TableCell value={30} cellKey={30}>
						<p className={styles.popover__text}>
							30+ contributions
						</p>
					</TableCell>
				</li>
			</ul>
			<li className={styles.item}>
				<p className={styles.text}>
					Больше
				</p>
			</li>
		</ul>
	)
}