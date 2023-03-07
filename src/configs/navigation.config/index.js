import { 
    NAV_ITEM_TYPE_TITLE, 

    NAV_ITEM_TYPE_ITEM 
} from 'constants/navigation.constant'


const navigationConfig = [

    {
        key: 'home',
		path: '/home',
		title: 'Home',
		translateKey: 'nav.home',
		icon: 'home',
		type: NAV_ITEM_TYPE_ITEM,
		authority: [],
        subMenu: []
    },
    /** Example purpose only, please remove */
  
   
    {
		key: 'groupMenu',
		path: '',
		title: 'ADMINISTRATOR',
		translateKey: '',
		icon: '',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [],
		subMenu: [
			{
				key: 'adminCompanies',
				path: '/administrator/companies',
				title: 'Companies',
				translateKey: 'Companies',
				icon: 'companies',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: 'adminDrivers',
				path: '/administrator/drivers',
				title: 'Drivers',
				translateKey: 'Drivers',
				icon: 'driver',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
		
			{
				key: 'adminRoutes',
				path: '/administrator/routes',
				title: 'Routes',
				translateKey: 'Routes',
				icon: 'routes',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			
			{
				key: 'adminTickets',
				path: '/administrator/tickets',
				title: 'Tickets',
				translateKey: 'Tickets',
				icon: 'tickets',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: 'adminVehicles',
				path: '/administrator/vehicles',
				title: 'Vehicles',
				translateKey: 'Vehicles',
				icon: 'vehicles',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
				{
				key: 'checkpoints',
				path: '/administrator/checkpoints',
				title: 'Checkpoints',
				translateKey: 'Checkpoints',
				icon: 'checkpoint',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
		
		
			
			
        ]
    }
]

export default navigationConfig