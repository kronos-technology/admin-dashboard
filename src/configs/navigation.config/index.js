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
				key: 'viewCompanies',
				path: '/administrator/companies',
				title: 'Companies',
				translateKey: 'Companies',
				icon: 'companies',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: 'viewDrivers',
				path: '/administrator/drivers',
				title: 'Drivers',
				translateKey: 'Drivers',
				icon: 'driver',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
		
			{
				key: 'viewRoutes',
				path: '/administrator/routes',
				title: 'Routes',
				translateKey: 'Routes',
				icon: 'routes',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			
			{
				key: 'viewTickets',
				path: '/src/views/demo/ViewTickets.js',
				title: 'Tickets',
				translateKey: 'Tickets',
				icon: 'tickets',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: 'viewVehicles',
				path: '/src/views/demo/ViewVehicles.js',
				title: 'Vehicles',
				translateKey: 'Vehicles',
				icon: 'vehicles',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
		
			
			
        ]
    }
]

export default navigationConfig