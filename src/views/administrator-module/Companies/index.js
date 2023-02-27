import React, {  } from 'react'
import { AdaptableCard } from 'components/shared'
import AdministratorTable from "../components/AdminModule";
import { injectReducer } from 'store/index'
import reducer from './store'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch } from 'react-redux'
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom'
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
let data =[ 
	{
	  "alias": "Rapido Santa",
	  "companyId":"RAPIDO-SANTA",
	  "name":"Rapido Santa SA",
	  "phone":"+576018901288",
	  "email":"rapidoSanta@gmail.com",
	  "city":"Facatativa",
	  "address":"Carrera 3 # 9 - 35",
	  "nit":"9393939393"
	},
	{
	  "alias": "Andina",
	  "companyId":"FLOTA-ANDINA",
	  "name":"Flota Andina LTDA",
	  "phone":"+576012685301",
	  "email":"flotaAndina@gmail.com",
	  "city":"Facatativa",
	  "address":"Cl 22a sur #43",
	  "nit":"1079839393"
	},
	{
	   "alias": "Sabana",
	   "companyId":"EXPRESO-SABANA",
	   "name":"Expreso De La Sabana SAS",
	   "phone":"+576012635301",
	   "email":"expresoSabana@gmail.com",
	   "city":"Bogota",
	   "address":"DIAGONAL 23 69 60 OF 702",
	   "nit":"100039393993"
	},
	{
	   "alias": "Ayacucho",
	   "companyId":"FLOTA-AYACUCHO",
	   "name":"Flota Ayacucho LTDA",
	   "phone":"+576014203733",
	   "email":"flotaAyacucho@gmail.com",
	   "city":"Facatativa",
	   "address":"Carrera 2 # 15 - 31",
	   "nit":"9999333999"
	},
	{
	   "alias": "Villetax",
	   "companyId":"TRANS-VILLETAX",
	   "name":"Transportes Villetax SA",
	   "phone":"+576018901288",
	   "email":"trasportesVilletax@gmail.com",
	   "city":"Facatativa",
	   "address":"Carrera 3 # 9 - 35",
	   "nit":"839984398"
	}
  
  ]
  
const Companies = () => {
	
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdministratorTable columns={columns} data={data}/>
            </AdaptableCard>
        </>
    )
    }

export default Companies