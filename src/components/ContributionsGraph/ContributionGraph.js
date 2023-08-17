import ContributionsTable from "./ContributionsTable/ContributionsTable";
import Legend from "./Legend/Legend";

export default function ContributionGraph() {
	return (
		<div className="container">
			<ContributionsTable />
			<Legend />
		</div>
	)
}