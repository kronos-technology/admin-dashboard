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
		Header: 'Checkpoint',
		accessor: 'checkpointId',
		// sortable: true,
	},
	{
		Header: 'Route',
		accessor: 'routeId',
		// sortable: true,
	},
	{
		Header: 'DateTime',
		accessor:'timestamp',
		// soportable: true,
	},
	{
		Header: 'Plate',
		accessor:'plate',
		// soportable: true,
	},
	{
		Header: 'Driver',
		accessor:'driverId',
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
        "checkpointId": "FACA-ABOGADOS",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:00:00.123-0500",
        "plate": "ZIY246",
        "driverId": "1070959307"
    },
    {
        "checkpointId": "FACA-ABOGADOS",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:06:28.313-0500",
        "plate": "BAM577",
        "driverId": "1070947951"
    },
    {
        "checkpointId": "FACA-ABOGADOS",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:15:00-0500",
        "plate": "RPG333",
        "driverId": "1070959307"
    },
    {
        "checkpointId": "FACA-ABOGADOS",
        "routeId": "FACATA-BOGOTA-80",
        "timestamp": "2022-06-19T10:10:35-0500",
        "plate": "ABC132",
        "driverId": "1070947951"
    },
    {
        "checkpointId": "FACA-ABOGADOS",
        "routeId": "FACATA-BOGOTA-80",
        "timestamp": "2022-05-19T10:23:35-0500",
        "plate": "ZIY246",
        "driverId": "1070947951"
    },
    {
        "checkpointId": "FACA-CARTAGENITA",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:15:00-0500",
        "plate": "ZIY246",
        "driverId": "1070959307"
    },
    {
        "checkpointId": "FACA-CARTAGENITA",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:23:02-0500",
        "plate": "BAM577",
        "driverId": "1070947951"
    },
    {
        "checkpointId": "BJCA-CORSO",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:19:00-0500",
        "plate": "ZIY246",
        "driverId": "1070959307"
    },
    {
        "checkpointId": "BJCA-CORSO",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:26:12-0500",
        "plate": "BAM577",
        "driverId": "1070947951"
    },
    {
        "checkpointId": "MADR-PROSPERIDAD",
        "routeId": "FACATA-BOGOTA-13",
        "timestamp": "2022-05-18T12:25:33-0500",
        "plate": "ZIY246",
        "driverId": "1070959307"
    }
]


const Tickets = () => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdministratorTable columns={columns} data={data}/>
            </AdaptableCard>
        </>
    )
    }

export default Tickets