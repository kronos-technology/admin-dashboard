import React, { useEffect, useCallback, useMemo } from 'react'
import { AdaptableCard } from 'components/shared'
import AdminModule from "../components/AdminModule";
import { injectReducer } from 'store/index'
import reducer from './store'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch, useSelector } from 'react-redux'
import { getDrivers, setTableData } from './store/dataSlice'
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom';
import AdminEditDialog from '../components/AdminEditDialog';


injectReducer('drivers', reducer)


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




let columns = [
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
		Header: 'Lastname',
		accessor: 'lastName',
		// sortable: true,
	},
	{
		Header: 'Id',
		accessor: 'id',
		// sortable: true,
	},
	{
		Header: 'DriverId',
		accessor:'driverId',
		// soportable: true,
	},
	{
		Header: 'CompanyId',
		accessor:'companyId',
		// soportable: true,
	},
	{
		Header: 'Birthdate',
		accessor:'birthdate',
		// soportable: true,
	},
	{
		Header: 'Phone',
		accessor:'phone',
		// soportable: true,
	},

	{
		Header: '',
		id: 'action',
		accessor: (row) => row,
		Cell: props => <ActionColumn row={props.row.original} />
	},
]




const Drivers = () => {
	
	const dispatch = useDispatch()
	const data = useSelector((state) => state.drivers.data.driversList)
	const loading = useSelector((state) => state.drivers.data.loading)
	const filterData = useSelector((state) => state.drivers.data.filterData)

	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.drivers.data.tableData)
	
	const fetchData = useCallback(() => {
		dispatch(getDrivers({pageIndex, pageSize, sort, query, filterData}))
	}, [pageIndex, pageSize, sort, query, filterData, dispatch])

	useEffect(() => {
		fetchData()
	}, [fetchData, pageIndex, pageSize, sort, filterData])
	
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdminModule columns={columns} data={data}/>
            </AdaptableCard>
        </>
    )
    }

export default Drivers