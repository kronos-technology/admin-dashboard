import React, { useEffect, useCallback, useMemo  } from 'react'
import { AdaptableCard } from 'components/shared'
import AdminTable from "../components/AdminTable";
import { injectReducer } from 'store/index'
import reducer from './store'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch, useSelector } from 'react-redux'
import { getTickets } from './store/dataSlice'
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom'

injectReducer('tickets', reducer)

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
		Header: 'Name',
		accessor: 'name',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return <NameColumn row={row} />
		},
	},

	{
		Header: 'CheckpointId',
		accessor: 'checkpointId',
		// sortable: true,
	},
	{
		Header: 'CompanyId',
		accessor: 'companyId',
		// sortable: true,
	},
	{
		Header: 'DriverId',
		accessor:'driverId',
		// soportable: true,
	},
	{
		Header: 'Plate',
		accessor:'plate',
		// soportable: true,
	},
	{
		Header: 'RouteId',
		accessor:'routeId',
		// soportable: true,
	},
		{
		Header: 'Timestamp',
		accessor:'timestamp',
		// soportable: true,
	},
			{
		Header: 'VehicleNumber',
		accessor:'vehicleNumber',
		// soportable: true,
	},
			{
		Header: '',
		id: 'action',
		accessor: (row) => row,
		Cell: props => <ActionColumn row={props.row.original} />
	},
]




const Tickets = () => {
    
    const dispatch = useDispatch()
	const data = useSelector((state) => state.tickets.data.ticketsList)
	const loading = useSelector((state) => state.tickets.data.loading)
	const filterData = useSelector((state) => state.tickets.data.filterData)
	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.tickets.data.tableData)
	
	const fetchData = useCallback(() => {
        dispatch(getTickets({pageIndex, pageSize, sort, query, filterData}))
	}, [pageIndex, pageSize, sort, query, filterData, dispatch])

	useEffect(() => {
		fetchData()
	}, [fetchData, pageIndex, pageSize, sort, filterData])
    
    
    
    
    
    
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdminTable columns={columns} data={data}/>
            </AdaptableCard>
        </>
    )
    }

export default Tickets