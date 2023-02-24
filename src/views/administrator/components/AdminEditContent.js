import React, { forwardRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import dayjs from 'dayjs'
import DriverForm from '../Drivers/DriverForm/DriverForm'

const AdminEditContent = forwardRef((_, ref) => {
	
	
	const dispatch = useDispatch()

	
	const data = useSelector()
	const { id } = customer
	
	const customer =  {
	    name: 'fredy',
		birthday: '08-09-1987',
		email: 'fredy@gmai.com',
		img:'',
		location:'',
		title: 'prueba',
		phoneNumber: '3058134980',
		facebook:'',
		twitter: '',
		pinterest: '',
		linkedIn: '',
	}

	


	const onFormSubmit = values => {
		const {
			name,
			birthday,
			email,
			img,
			location,
			title,
			phoneNumber,
			facebook,
			twitter,
			pinterest,
			linkedIn
		} = values

		const basicInfo = {name, email, img, linkedIn,   }
		
		const personalInfo = {
			location,
			title,
			birthday: dayjs(birthday).format('DD/MM/YYYY'),
			phoneNumber,
			facebook,
			twitter,
			pinterest,
			linkedIn
		}
	
	

	}

	return (
		
		
		<DriverForm
		ref={ref} 
			onFormSubmit={onFormSubmit}
			customer={customer}
		/>
		)
})

export default AdminEditContent