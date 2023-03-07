import React, { useRef } from 'react'
import { Button } from 'components/ui'
import AdminTableSearch from './AdminTableSearch'
import AdminTableFilter from './AdminTableFilter'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'

const AdminTableTools = (tableData) => {


	const inputRef = useRef()

	//const tableData = useSelector((state) => state.crmCustomers.data.tableData)

	const handleInputChange = (val) => {
		const newTableData = cloneDeep(tableData)
		newTableData.query = val
		newTableData.pageIndex = 1
		if(typeof val === 'string' && val.length > 1) {

		}

		if(typeof val === 'string' && val.length === 0) {

		}
	}



	return (
		<div className="md:flex items-center justify-between">
			<div className="md:flex items-center gap-4">
				<AdminTableSearch ref={inputRef} onInputChange={handleInputChange} />
				<AdminTableFilter />
			</div>
			<div className="mb-4">
				<Button
					size="sm"
					onClick={()=>{}}
				>
					Clear All
				</Button>
			</div>
		</div>
	)
}

export default AdminTableTools