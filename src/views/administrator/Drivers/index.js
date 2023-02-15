import React  from 'react'
import { AdaptableCard } from 'components/shared'
import AdministratorTable from "../components/AdministratorTable";
import { injectReducer } from 'store/index'
import reducer from './store'
import useThemeClass from 'utils/hooks/useThemeClass'
import { useDispatch } from 'react-redux'
import { Avatar } from 'components/ui'
import { Link } from 'react-router-dom';
import AdminEditDialog from '../components/AdminEditDialog';


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
let data =[
	{
		"birthdate": "1988-05-05",
		"companyId": "EXPRESO-SABANA",
		"driverId": "1258879995",
		"id": "c256eb3c-0f17-4626-9551-382208046959",
		"lastName": "Quiñonez",
		"name": "Andres",
		"phone": "+573107485215"
	},
	{
		"birthdate": "1990-12-06",
		"companyId": "EXPRESO-SABANA",
		"driverId": "1070959307",
		"id": "48ae5034-ca83-4f8f-8e54-3b88630ec453",
		"lastName": "Gonzalez",
		"name": "Anderson",
		"phone": "+573103308156"
	},
	{
		"birthdate": "1987-09-08",
		"companyId": "EXPRESO-SABANA",
		"driverId": "1070947951",
		"id": "35a79869-7e5d-4751-9d37-7c977fad2a70",
		"lastName": "Gonzalez",
		"name": "Fredy",
		"phone": "+573058134980"
	},
	{
		"birthdate": "1982-02-06",
		"companyId": "EXPRESO-SABANA",
		"driverId": "19874580",
		"id": "45bd90e3-a2e3-470f-b437-dd8745e4d75e",
		"lastName": "Gomez",
		"name": "Arley",
		"phone": "+573104478802"
	},
	{
		"birthdate": "1984-06-06",
		"companyId": "EXPRESO-SABANA",
		"driverId": "1021474369",
		"id": "573de5e4-fe82-4319-b818-b1f523988f62",
		"lastName": "Paez",
		"name": "Edgar",
		"phone": "+573108874452"
	},
	{
		"birthdate": "1987-08-01",
		"companyId": "EXPRESO-SABANA",
		"driverId": "1060279314",
		"id": "c358a802-b85e-45a4-9763-efc2f38be1af",
		"lastName": "Herrera",
		"name": "Oscar",
		"phone": "+573058740179"
	},
	{
		"birthdate": "1987-02-15",
		"companyId": "FLOTA-ANDINA",
		"driverId": "1951872585",
		"id": "37704639-bae9-415f-a930-99d2c7f7fab3",
		"lastName": "Chacon",
		"name": "Eduardo",
		"phone": "+573107985102"
	},
	{
		"birthdate": "1982-04-20",
		"companyId": "FLOTA-ANDINA",
		"driverId": "1020874135",
		"id": "9be7f463-ea21-417b-849c-296e7e7a18d7",
		"lastName": "Rocha",
		"name": "Pedro",
		"phone": "+573057854102"
	},
	{
		"birthdate": "1991-05-18",
		"companyId": "FLOTA-AYACUCHO",
		"driverId": "107066952",
		"id": "5f9f295d-a526-4d38-9521-8a9743225d74",
		"lastName": "Gonzalez",
		"name": "Diego",
		"phone": "+573107419512"
	},
	{
		"birthdate": "1975-05-21",
		"companyId": "FLOTA-AYACUCHO",
		"driverId": "19134629",
		"id": "b42cf4ad-ac67-4309-a6bd-1b87b35b5259",
		"lastName": "Gonzalez",
		"name": "Alfonso",
		"phone": "+573195107855"
	},
	{
		"birthdate": "1989-04-22",
		"companyId": "FLOTA-AYACUCHO",
		"driverId": "1064874175",
		"id": "aeccae9f-70d7-4f47-97cd-db52d79d44f9",
		"lastName": "Ramirez",
		"name": "Jorge",
		"phone": "+573214138574"
	},
	{
		"birthdate": "1978-08-23",
		"companyId": "FLOTA-AYACUCHO",
		"driverId": "1025574312",
		"id": "8ef4cd73-5ddc-47ff-9050-5b5c329bc2ec",
		"lastName": "Marquez",
		"name": "Alipio",
		"phone": "+573103448258"
	},
	{
		"birthdate": "1985-03-04",
		"companyId": "FLOTA-AYACUCHO",
		"driverId": "19097319",
		"id": "8a8682a7-d64b-4f59-8df1-fac401aa0974",
		"lastName": "Correa",
		"name": "Gerlen",
		"phone": "+573113966781"
	},
	{
		"birthdate": "1992-11-17",
		"companyId": "RAPIDO-SANTA",
		"driverId": "1078974620",
		"id": "af5c5299-7563-449e-83e6-e6e7b4344986",
		"lastName": "Diaz",
		"name": "Jhon",
		"phone": "+573103308879"
	},
	{
		"birthdate": "1978-04-21",
		"companyId": "RAPIDO-SANTA",
		"driverId": "1020874456",
		"id": "e5c04290-3c2e-45f5-8726-812f5f1f4f3b",
		"lastName": "Ramos",
		"name": "Pedro",
		"phone": "+573107436210"
	},
	{
		"birthdate": "1980-11-07",
		"companyId": "RAPIDO-SANTA",
		"driverId": "1020874455",
		"id": "08a6ea7c-a3ac-4f75-a749-ef868f5ae65e",
		"lastName": "Barbosa",
		"name": "Hernan",
		"phone": "+573058874456"
	},
	{
		"birthdate": "1993-12-15",
		"companyId": "RAPIDO-SANTA",
		"driverId": "1070174555",
		"id": "1aaa0957-82af-4ddf-a359-00bf9716b5e5",
		"lastName": "Rodriguez",
		"name": "Jhon",
		"phone": "+573101523698"
	}
]

const Drivers = () => {
	
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdministratorTable columns={columns} data={data}/>
		
		
			
            </AdaptableCard>
          
            
           
        </>
    )
    }

export default Drivers