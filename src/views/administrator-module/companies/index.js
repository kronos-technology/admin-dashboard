import React, { useEffect, useCallback, useMemo } from 'react'
import { AdaptableCard } from 'components/shared'
import AdminModule from "../components/AdminModule";
import { injectReducer } from 'store/index'
import reducer from './store'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanies, setTableData } from './store/dataSlice'
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom';
import AdminEditDialog from '../components/AdminEditDialog';

injectReducer('companies', reducer)



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
		Header: 'alias',
		accessor: 'alias',
		sortable: true,
		Cell: props => {
			const row = props.row.original
			return <NameColumn row={row} />
		},
	},
	{
		Header: 'ID',
		accessor: 'companyId',
		// sortable: true,
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

  
const Companies = () => {
	
	const dispatch = useDispatch()
	const data = useSelector((state) => state.companies.data.companiesList)
	const loading = useSelector((state) => state.companies.data.loading)
	const filterData = useSelector((state) => state.companies.data.filterData)
	const { pageIndex, pageSize, sort, query, total } = useSelector((state) => state.companies.data.tableData)
	
	const fetchData = useCallback(() => {
        dispatch(getCompanies({pageIndex, pageSize, sort, query, filterData}))
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

export default Companies