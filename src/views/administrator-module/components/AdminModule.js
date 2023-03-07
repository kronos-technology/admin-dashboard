import React from 'react'
import { AdaptableCard } from 'components/shared'
import { DataTable } from 'components/shared'
import AdminTableTools from './AdminTableTools'
import AdminTableFilter from './AdminTableFilter'


const AdminModule = ({columns, data, }) => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdminTableTools/>
            <AdminTableFilter/>	
            <DataTable columns={columns} data={data} />
            </AdaptableCard>
        </>
    )
    }

export default AdminModule