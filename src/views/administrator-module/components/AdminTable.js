import React from 'react'
import { AdaptableCard } from 'components/shared'
import { DataTable } from 'components/shared'
import AdminTableTools from './AdminTableTools'
import { ConfirmDialog } from 'components/shared'

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
        onDelete,
        dialogOpen=false,
        onDialogClose,
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
                skeletonAvatarProps={skeletonAvatarProps}
				loading={loading}
				pagingData={pagingData}
				onPaginationChange={onPaginationChange}
				onSelectChange={onSelectChange}
				onSort={onSort}
            />
            <ConfirmDialog
                isOpen={dialogOpen}
                onClose={onDialogClose}
                onRequestClose={onDialogClose}
                type="danger"
                title={`Delete ${entity}`}
                onCancel={onDialogClose}
                onConfirm={onDelete}
                confirmButtonColor="red-600"
            >
			<p>
				Are you sure you want to delete this {entity}? 
				All record related to this {entity} will be deleted as well. 
				This action cannot be undone.
			</p>
		</ConfirmDialog>
            </AdaptableCard>
        </>
    )
    }

export default AdminTable