import React from 'react'
import { AdaptableCard } from 'components/shared'
import AdminTable from './AdminTable'
import AdminTableTools from './AdminTableTools'
import AdminTableFilter from './AdminTableFilter'
import { injectReducer } from 'store/index'


const AdministratorTable = ({columns, data}) => {
    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <AdminTableTools/>
            <AdminTableFilter/>
            <AdminTable columns={columns} data={data} />
            </AdaptableCard>
        </>
    )
    }

export default AdministratorTable