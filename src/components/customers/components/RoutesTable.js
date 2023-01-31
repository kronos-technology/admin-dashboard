
import React from 'react'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch } from 'react-redux'
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom'
import CustomerEditDialog from './CustomerEditDialog'
import { Table } from 'components/ui'
import { useTable, useSortBy } from 'react-table'


const ActionColumn = ({row}) => {
	const { textTheme } = useThemeClass()
	const dispatch = useDispatch()

	const onEdit = () => {
		// eslint-disable-next-line no-undef
		dispatch(setDrawerOpen())
		// dispatch(setSelectedCustomer(row))
	}

	return (
		<div 
			className={`${textTheme} cursor-pointer select-none font-semibold`}
			onClick={onEdit}
		>
			Edit
		</div>
	)
}

const NameColumn = ({row}) => {

	const { textTheme } = useThemeClass()

	return (
		<div className="flex items-center">
			<Avatar size={28} shape="circle" src={row.img} />
			<Link 
				className={`hover:${textTheme} ml-2 rtl:mr-2 font-semibold`}
				to={`/app/crm/customer-details?id=${row.id}`}
			>
				{row.name}
			</Link>
		</div>
	)
}

const columns = [
	{
		Header: 'RouteId',
		accessor: 'routeId',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return <NameColumn row={row} />
		},
	},
	
	{
		Header: 'Origin',
		accessor: 'origin',
		// sortable: true,
	},
	{
		Header: 'Destination',
		accessor:'destination',
		// soportable: true,
	},
	{
		Header: 'Geojson',
		accessor:'geojson',
		// soportable: true,
	},
	
	
	
	{
		Header: '',
		id: 'action',
		accessor: (row) => row,
		Cell: props => <ActionColumn row={props.row.original} />
	},
]
const data =[
    {
        "routeId": "FACATA-MADRID-BOGOTA-13",
        "origin": "FACATATIVA",
        "destination": "BOGOTA",
        "geojson": "s3://locationtoroute1.geojson"
    },
    {
        "routeId": "FACATA-VTEMAD-BOGOTA-13",
        "origin": "FACATATIVA",
        "destination": "BOGOTA",
        "geojson": "s3://locationtoroute2.geojson"
    },
    {
        "routeId": "FACATA-BOGOTA-80",
        "origin": "FACATATIVA",
        "destination": "BOGOTA",
        "geojson": "s3://locationtoroute3.geojson"
    },
    {
        "routeId": "FACATA-BOJACA",
        "origin": "FACATATIVA",
        "destination": "BOJACA",
        "geojson": "s3://locationtoroute4.geojson"
    },
    {
        "routeId": "BOJACA-BOGOTA",
        "origin": "BOJACA",
        "destination": "BOGOTA",
        "geojson": "s3://locationtoroute5.geojson"
    }
	
]

const { Tr, Th, Td, THead, TBody,Sorter } = Table


const RoutesTable = () => {
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
							{column.render('Header')}
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
			<CustomerEditDialog />
		</>
  )
}

export default RoutesTable