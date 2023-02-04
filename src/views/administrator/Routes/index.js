import React, {  } from 'react'
import { AdaptableCard } from 'components/shared'
import AdministratorTable from "../components/AdministratorTable";
import { injectReducer } from 'store/index'
import reducer from './store'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch } from 'react-redux'
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom'
injectReducer('crmCustomers', reducer)

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

const data = [
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


const Routes = () => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdministratorTable columns={columns} data={data}/>
            </AdaptableCard>
        </>
    )
    }

export default Routes