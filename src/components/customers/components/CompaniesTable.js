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
		Header: 'CompanyId',
		accessor: 'companyId',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return <NameColumn row={row} />
		},
	},
	
	{
		Header: 'Name',
		accessor: 'name',
		// sortable: true,
	},
	{
		Header: 'Phone',
		accessor:'phone',
		// soportable: true,
	},
	{
		Header: 'Email',
		accessor:'email',
		// soportable: true,
	},
	{
		Header: 'City',
		accessor:'city',
		// soportable: true,
	},
	{
		Header: 'Address',
		accessor:'address',
		// soportable: true,
	},
    {
		Header: 'Nit',
		accessor:'nit',
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
        "companyId": "EXPRESO-SABANA",
        "name": "Expreso De La Sabana SAS",
        "phone": "+576012635301",
        "email": "expresoSabana@gmail.com",
        "city": "Bogota",
        "address": "DIAGONAL 23 69 60 OF 702",
        "nit": ""
    },
    {
        "companyId": "FLOTA-AYACUCHO",
        "name": "Flota Ayacucho LTDA",
        "phone": "+576014203733",
        "email": "flotaAyacucho@gmail.com",
        "city": "Facatativa",
        "address": "Carrera 2 # 15 - 31",
        "nit": ""
    },
    {
        "companyId": "TRANS-VILLETAX",
        "name": "Transportes Villetax SA",
        "phone": "+576018901288",
        "email": "trasportesVilletax@gmail.com",
        "city": "Facatativa",
        "address": "Carrera 3 # 9 - 35",
        "nit": ""
    },
    {
        "companyId": "RAPIDO-SANTA",
        "name": "Rapido Santa SA",
        "phone": "+576018901288",
        "email": "rapidoSanta@gmail.com",
        "city": "Facatativa",
        "address": "Carrera 3 # 9 - 35",
        "nit": ""
    },
    {
        "companyId": "FLOTA-ANDINA",
        "name": "Flota Andina LTDA",
        "phone": "+576035909788",
        "email": "flotaAndina@gmail.com",
        "city": "Facatativa",
        "address": "Cl 22a sur #43",
        "nit": ""
    }
	
]
const { Tr, Th, Td, THead, TBody,Sorter } = Table 	
const CompaniesTable = () => {
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

export default CompaniesTable