// import React, { useEffect, useCallback, useMemo } from 'react'
// import { DataTable } from 'components/shared'

// import { getCustomers, setTableData } from '../store/dataSlice'
// import { setSortedColumn } from '../store/stateSlice'
import AdminEditDialog from './AdminEditDialog'
// import cloneDeep from 'lodash/cloneDeep'
import { Table } from 'components/ui'
import { useTable, useSortBy } from 'react-table'





const { Tr, Th, Td, THead, TBody,Sorter } = Table


const AdminTable = (columns, data) => {
	console.log(columns)
	console.log(data)
	// const dispatch = useDispatch()
	// const data = useSelector((state) => state.crmCustomers.data.customerList)
	// const loading = useSelector((state) => state.crmCustomers.data.loading)
	// const filterData = useSelector((state) => state.crmCustomers.data.filterData)

	// const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.crmCustomers.data.tableData)

	// const fetchData = useCallback(() => {
	// 	dispatch(getCustomers({pageIndex, pageSize, sort, query, filterData}))
	// }, [pageIndex, pageSize, sort, query, filterData, dispatch])

	// useEffect(() => {
	// 	fetchData()
	// }, [fetchData, pageIndex, pageSize, sort, filterData])

	// const tableData = useMemo(() =>
	// 	({pageIndex, pageSize, sort, query, total}),
	// [pageIndex, pageSize, sort, query, total])

	// const onPaginationChange = page => {
	// 	const newTableData = cloneDeep(tableData)
	// 	newTableData.pageIndex =  page
	// 	dispatch(setTableData(newTableData))
	// }

	// const onSelectChange = value => {
	// 	const newTableData = cloneDeep(tableData)
	// 	newTableData.pageSize =  Number(value)
	// 	newTableData.pageIndex = 1
	// 	dispatch(setTableData(newTableData))
	// }

	// const onSort = (sort, sortingColumn) => {
	// 	const newTableData = cloneDeep(tableData)
	// 	newTableData.sort = sort
	// 	dispatch(setTableData(newTableData))
	// 	dispatch(setSortedColumn(sortingColumn))
	// }
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
	} = useTable({ columns, data, }, useSortBy)

	return (
		<><>
		<Table {...getTableProps()}>
			<THead>
			{headerGroups.map(headerGroup => (
				<Tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map(column => (
						<Th {...column.getHeaderProps(column.getSortByToggleProps())}>
				i			{column.render('Header')}
							<span>
								<Sorter sort={""}/>
							</span>
						</Th>
					))}
				</Tr>
			))}
			</THead>
			<TBody {...getTableBodyProps()}>
				{rows.map(
					(row, i) => {
					prepareRow(row)
					return (
						<Tr {...row.getRowProps()}>
							{row.cells.map(cell => {
								return (
								<Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
								)
							})}
						</Tr>
					)}
				)}
			</TBody>
		</Table>
	</>
			{/* <DataTable
				columns={columns}
				data={data}
				skeletonAvatarColumns={[0]}
				skeletonAvatarProps={{width: 28, height: 28 }}
				loading={''}
				pagingData={{  }}
				onPaginationChange={''}
				onSelectChange={''}
				onSort={''}
			/> */}
			<AdminEditDialog />
		</>
	)
}

export default AdminTable