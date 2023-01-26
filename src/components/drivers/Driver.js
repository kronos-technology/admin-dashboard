import React from 'react'
import { AdaptableCard } from 'components/shared'
import CustomersTable from '../customers/components/CustomersTable'
import CustomersTableTools from '../customers/components/CustomersTableTools'
import CustomerStatistic from '../customers/components/CustomerStatistic'
import { injectReducer } from 'store/index'
import reducer from '../customers/store'

injectReducer('crmCustomers', reducer)

const Customers = () => {
	return (
		<>
			<CustomerStatistic />
			<AdaptableCard className="h-full" bodyClass="h-full">
				<CustomersTableTools />
				<CustomersTable />
			</AdaptableCard>
		</>
	)
}

export default Customers 