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
				key: 'GroupSingleMenuItemView',
				path: '/Group-menu-item-view',
				title: 'Companies',
				translateKey: 'Vehicles',
				icon: 'companies',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: 'singleMenuItem',
				path: '/single-menu-view',
				title: 'Drivers',
				translateKey: 'Drivers',
				icon: 'driver',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
		
			{
				key: '',
				path: '',
				title: 'Routes',
				translateKey: 'Routes',
				icon: 'routes',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			
			{
				key: '',
				path: '',
				title: 'Tickets',
				translateKey: 'Tickets',
				icon: 'tickets',
				type: NAV_ITEM_TYPE_ITEM,
				authority: [],
				subMenu: []
			},
			{
				key: '',
				path: '',
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