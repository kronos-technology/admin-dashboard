import { 
    NAV_ITEM_TYPE_TITLE, 

    NAV_ITEM_TYPE_ITEM 
} from 'constants/navigation.constant'
import { APP_PREFIX_PATH } from 'constants/route.constant'

const navigationConfig = [

    {
        key: 'home',
		path: `${APP_PREFIX_PATH}`,
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
		title: 'Administrator',
		translateKey: '',
		icon: '',
		type: NAV_ITEM_TYPE_TITLE,
		authority: [],
		subMenu: [
			{
				key: 'adminCompanies',
				path: `${APP_PREFIX_PATH}/admin/companies`,
				title: 'Companies',
				translateKey: 'Companies',
				icon: 'companies',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: 'adminDrivers',
				path: `${APP_PREFIX_PATH}/admin/drivers`,
				title: 'Drivers',
				translateKey: 'Drivers',
				icon: 'driver',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
		
			{
				key: 'adminRoutes',
				path: `${APP_PREFIX_PATH}/admin/routes`,
				title: 'Routes',
				translateKey: 'Routes',
				icon: 'routes',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			
			{
				key: 'adminTickets',
				path: `${APP_PREFIX_PATH}/admin/tickets`,
				title: 'Tickets',
				translateKey: 'Tickets',
				icon: 'tickets',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: 'adminVehicles',
				path: `${APP_PREFIX_PATH}/admin/vehicles`,
				title: 'Vehicles',
				translateKey: 'Vehicles',
				icon: 'vehicles',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
				{
				key: 'checkpoints',
				path: `${APP_PREFIX_PATH}/admin/checkpoints`,
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