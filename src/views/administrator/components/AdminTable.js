
import  AdminEditDialog  from "./AdminEditDialog";
import { DataTable } from 'components/shared'

const AdminTable = ({columns, data}) => {
	return (
		<>
			<DataTable columns={columns} data={data} />
			<AdminEditDialog />
		</>
	)
}

export default AdminTable
