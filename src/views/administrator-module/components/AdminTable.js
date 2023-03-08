import React from 'react'
import { AdaptableCard } from 'components/shared'
import { DataTable } from 'components/shared'
import AdminTableTools from './AdminTableTools'
import AdminTableFilter from './AdminTableFilter'


const AdminTable = (props) => {

    const { 
        title,
        entity,
        columns,
        data,
        skeletonAvatarColumns,
        skeletonAvatarProps,
        loading,
        pagingData,
        onPaginationChange,
        onSelectChange,
        onSort,
    } = props

    return (
        <>
            <AdaptableCard className="h-full" bodyClass="h-full">
            <div className="lg:flex items-center justify-between mb-4">
				<h3 className="mb-4 lg:mb-0">{title}</h3>
				<AdminTableTools  entity={entity}/>
			</div>
            <DataTable 
                columns={columns}
                data={data}
                skeletonAvatarColumns={skeletonAvatarColumns}
                skeletonAvatarProps={{className: 'rounded-md'}}
				loading={loading}
				pagingData={pagingData}
				onPaginationChange={onPaginationChange}
				onSelectChange={onSelectChange}
				onSort={onSort}
            />
            </AdaptableCard>
        </>
    )
    }

export default AdminTable