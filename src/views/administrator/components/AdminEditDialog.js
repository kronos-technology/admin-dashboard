import React, { useRef } from 'react'
import { 
	Button, 
	Drawer,
} from 'components/ui'
import AdminEditContent from './AdminEditContent'
import { useDispatch, useSelector } from 'react-redux'


const DrawerFooter = ({onSaveClick, onCancel}) => {
	return (
		<div className="text-right w-full">
			<Button size="sm" className="mr-2" onClick={onCancel}>Cancel</Button>
			<Button size="sm" variant="solid" onClick={onSaveClick}>Save</Button>
		</div>
	)
}

const AdminEditDialog = () => {


	const formikRef = useRef()

	const formSubmit = () => {
		formikRef.current?.submitForm()
	}

	return (
		<Drawer
			isOpen={false}
			onClose={()=>{}}
			onRequestClose={()=>{}}
			closable={false}
			bodyClass="p-0"
			footer={<DrawerFooter onCancel={()=>{}} onSaveClick={formSubmit} />}
		>
			<AdminEditContent ref={formikRef} />
		</Drawer>
	)
}

export default AdminEditDialog