import React from 'react';
import { AdaptableCard } from 'components/shared';
import Driver from 'components/drivers/Driver';
import CustomersTableTools from 'views/administrator/Drivers/components/CustomersTableTools';
import CustomerTableFilter from 'views/administrator/Drivers/components/CustomerTableFilter';

/** Example purpose only */
const ViewDrivers = () => {
  // const [arrayNumero, setNumero] = useState([1,2,3,4,5,6,7,8,9,0])

  return (
    <AdaptableCard className="h-full" bodyClass="h-full">
      <CustomersTableTools />
      <CustomerTableFilter />
      <Driver/> 
    </AdaptableCard>
  );
};

export default ViewDrivers;
