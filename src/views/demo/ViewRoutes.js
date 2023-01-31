import React from 'react'
import { AdaptableCard } from 'components/shared'
// import RoutesTable from 'components/customers/components/CompaniesTable'
import CustomersTableTools from 'components/customers/components/CustomersTableTools'
import CustomerTableFilter from 'components/customers/components/CustomerTableFilter'

const ViewRoutes = () => {
  return (
    <>
          <AdaptableCard className="h-full" bodyClass="h-full">

		   <CustomersTableTools/>
			<CustomerTableFilter/>
			


		  </AdaptableCard>
		 



		</>
  )
}

export default ViewRoutes