import React, { useEffect, useCallback, useMemo } from 'react'
import { AdaptableCard } from 'components/shared'
import AdminTable from "../components/AdminTable";
import { injectReducer } from 'store/index'
import reducer from './store'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch, useSelector } from 'react-redux'
import { getRoutes} from './store/dataSlice' 
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom'


injectReducer('routes', reducer)

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
		Header: 'ID',
		accessor: 'routeId',
		// sortable: true,
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
		Header: 'GeoJSON',
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



const Routes = () => {
	
	const dispatch = useDispatch()
	const data = useSelector((state) => state.routes.data.routesList)
	const loading = useSelector((state) => state.routes.data.loading)
	const filterData = useSelector((state) => state.routes.data.filterData)
	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.routes.data.tableData)
	
	const fetchData = useCallback(() => {
        dispatch(getRoutes({pageIndex, pageSize, sort, query, filterData}))
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

export default Routes