import React, {  } from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from '../customers/components/CustomersTable'

// import CustomerStatistic from '../customers/components/CustomerStatistic'
import { injectReducer } from 'store/index'
import reducer from '../customers/store'

injectReducer('crmCustomers', reducer)

const Customers = () => {


	
	return (
		<>
			
			<AdaptableCard className="h-full" bodyClass="h-full">
			<CustomersTable />
				
			</AdaptableCard>
			
		</>
	)
}

export default Customers 