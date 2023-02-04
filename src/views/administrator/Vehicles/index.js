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
		Header: 'Plate',
		accessor: 'plate',
		// sortable: true,
	},
	{
		Header: 'Status',
		accessor: 'status',
		// sortable: true,
	},
	{
		Header: 'Vehicle Number',
		accessor:'vehicleNumber',
		// soportable: true,
	},
	{
		Header: 'Company',
		accessor:'companyId',
		// soportable: true,
	},
	{
		Header: 'Current Driver',
		accessor:'currentDriverId',
		// soportable: true,
	},
			{
		Header: '',
		id: 'action',
		accessor: (row) => row,
		Cell: props => <ActionColumn row={props.row.original} />
	},

]

const data =[{
	"plate": "ZIY246",
	"status": "IDLE",
	"vehicleNumber": "032",
	"companyId": "EXPRESO-SABANA",
	"currentDriverId": "1070959307"
},
{
	"plate": "BAM577",
	"status": "COVERING#FACATA-BOGOTA-13#4",
	"vehicleNumber": "048",
	"companyId": "EXPRESO-SABANA",
	"currentDriverId": "1070947951"
},
{
	"plate": "ABC123",
	"status": "COVERING#FACATA-BOGOTA-13#3",
	"vehicleNumber": "013",
	"companyId": "FLOTA-AYACUCHO",
	"currentDriverId": "19134629"
},
{
	"plate": "SRL330",
	"status": "COVERING#FACATA-BOGOTA-13#4",
	"vehicleNumber": "125",
	"companyId": "RAPIDO-SANTA",
	"currentDriverId": "1020874455"
},
{
	"plate": "WPT160",
	"status": "COVERING#FACATA-BOGOTA-13#5",
	"vehicleNumber": "140",
	"companyId": "EXPRESO-SABANA",
	"currentDriverId": "19874580"
},
{
	"plate": "SPT449",
	"status": "COVERING#FACATA-BOGOTA-13#6",
	"vehicleNumber": "215",
	"companyId": "RAPIDO-SANTA",
	"currentDriverId": "1020874455"
},
{
	"plate": "SRL990",
	"status": "COVERING#FACATA-BOGOTA-13#7",
	"vehicleNumber": "521",
	"companyId": "FLOTA-AYACUCHO",
	"currentDriverId": "19097319"
},
{
	"plate": "UTL023",
	"status": "COVERING#FACATA-BOGOTA-13#8",
	"vehicleNumber": "870",
	"companyId": "EXPRESO-SABANA",
	"currentDriverId": "1060279314"
},
{
	"plate": "PRR504",
	"status": "COVERING#FACATA-BOGOTA-13#9",
	"vehicleNumber": "941",
	"companyId": "FLOTA-AYACUCHO",
	"currentDriverId": "107066952"
},
{
	"plate": "SRT554",
	"status": "COVERING#FACATA-BOGOTA-13#10",
	"vehicleNumber": "694",
	"companyId": "RAPIDO-SANTA",
	"currentDriverId": "1070174555"
},
{
	"plate": "UTQ693",
	"status": "COVERING#FACATA-BOGOTA-13#11",
	"vehicleNumber": "852",
	"companyId": "EXPRESO-SABANA",
	"currentDriverId": "1020874455"
},
{
	"plate": "SLP876",
	"status": "COVERING#FACATA-BOGOTA-13#12",
	"vehicleNumber": "360",
	"companyId": "FLOTA-AYACUCHO",
	"currentDriverId": "1064874975"
},
{
	"plate": "SCT491",
	"status": "COVERING#FACATA-BOGOTA-13#13",
	"vehicleNumber": "232",
	"companyId": "FLOTA-ANDINA",
	"currentDriverId": "1020874455"
},
{
	"plate": "TFL271",
	"status": "COVERING#FACATA-BOGOTA-13#14",
	"vehicleNumber": "187",
	"companyId": "FLOTA-ANDINA",
	"currentDriverId": "1951872585"
},
{
	"plate": "SPR987",
	"status": "COVERING#FACATA-BOGOTA-13#15",
	"vehicleNumber": "258",
	"companyId": "FLOTA-AYACUCHO",
	"currentDriverId": "1035777535"
},
{
	"plate": "TRS451",
	"status": "COVERING#FACATA-BOGOTA-13#16",
	"vehicleNumber": "654",
	"companyId": "EXPRESO-SABANA",
	"currentDriverId": "1021474369"
},
{
	"plate": "PRW222",
	"status": "COVERING#FACATA-BOGOTA-13#17",
	"vehicleNumber": "421",
	"companyId": "RAPIDO-SANTA",
	"currentDriverId": "1078974620"
},
{
	"plate": "TTP309",
	"status": "COVERING#FACATA-BOGOTA-13#18",
	"vehicleNumber": "774",
	"companyId": "EXPRESO-SABANA",
	"currentDriverId": "1258879995"
},
{
	"plate": "YRS762",
	"status": "COVERING#FACATA-BOGOTA-13#19",
	"vehicleNumber": "887",
	"companyId": "FLOTA-AYACUCHO",
	"currentDriverId": "1025574312"
},
{
	"plate": "FAP064",
	"status": "COVERING#FACATA-BOGOTA-13#20",
	"vehicleNumber": "964",
	"companyId": "FLOTA-ANDINA",
	"currentDriverId": "1011474852"
}

]


const Vehicles = () => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdministratorTable columns={columns} data={data}/>
            </AdaptableCard>
        </>
    )
    }

export default Vehicles