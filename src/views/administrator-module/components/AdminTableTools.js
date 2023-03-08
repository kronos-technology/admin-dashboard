import React, { useRef } from 'react'
import { Button } from 'components/ui'
import AdminTableSearch from './AdminTableSearch'
import AdminTableFilter from './AdminTableFilter'
import { useDispatch, useSelector } from 'react-redux'
import cloneDeep from 'lodash/cloneDeep'
import { Link } from 'react-router-dom'
import { HiDownload, HiPlusCircle } from 'react-icons/hi'
const AdminTableTools = (props) => {
	const {entity, tableData} =  props
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


	const addItemRoute = `/administrator/${entity}-new`

	return (
		<div className="md:flex items-center justify-between">
			<div className="md:flex items-center gap-4">
				<AdminTableSearch ref={inputRef} onInputChange={handleInputChange} />
			</div>
			<div className="mb-4">
			<Link 
				className="block lg:inline-block md:mb-0 mb-4"
			 	to={addItemRoute}
			>
				<Button
					block
					variant="solid"
					size="sm" 
					icon={<HiPlusCircle />}
				>
					Add {entity.charAt(0).toUpperCase() + entity.slice(1)}
				</Button>
			</Link>
			</div>
		</div>
	)
}

export default AdminTableTools