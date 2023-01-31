import React, {  } from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from '../customers/components/CustomersTable'
import CustomersTableTools from 'components/customers/components/CustomersTableTools'
import CustomerTableFilter from 'components/customers/components/CustomerTableFilter'
import { injectReducer } from 'store/index'
import reducer from '../customers/store'



injectReducer('crmCustomers', reducer)

const Customers = () => {


	
	return (
		<>
			
			<AdaptableCard className="h-full" bodyClass="h-full">

			<CustomersTableTools/>
			<CustomerTableFilter/>
			<CustomersTable />
			
			</AdaptableCard>
			
		</>
	)
}

export default Customers 