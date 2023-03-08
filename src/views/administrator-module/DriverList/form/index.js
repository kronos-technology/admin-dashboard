import React, { forwardRef } from 'react'
import { Tabs, FormContainer, } from 'components/ui'
import { Form, Formik } from 'formik'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import * as Yup from 'yup'
import PersonalInfoForm from './DriverFormItems'
import AdminEditForm from "../../components/AdminEditForm"; 

dayjs.extend(customParseFormat)

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email').required('Email Required'),
	name: Yup.string().required('User Name Required'),
	location: Yup.string(),
	title: Yup.string(),
	phoneNumber: Yup.string().matches(
		/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/, 
		'Phone number is not valid'
	),
	birthday: Yup.string(),
	facebook: Yup.string(),
	twitter: Yup.string(),
	pinterest: Yup.string(),
	linkedIn: Yup.string(),
	img: Yup.string(),
})

const { TabNav, TabList, TabContent } = Tabs

const DriverForm = forwardRef((props, ref) => {

	const { driver, onFormSubmit } = props

	return (
		<Formik
			innerRef={ref}
			initialValues={{ 
				name: driver.name || '',
				email: driver.email || '',
				img: driver.img || '',
				location: driver?.personalInfo?.location || '',
				title: driver?.personalInfo?.title || '',
				phoneNumber:driver?.personalInfo?.phoneNumber || '',
				birthday: driver?.personalInfo?.birthday && dayjs(driver.personalInfo.birthday,'DD/MM/YYYY').toDate(),
				facebook: driver?.personalInfo?.facebook || '',
				twitter: driver?.personalInfo?.twitter || '',
				pinterest: driver?.personalInfo?.pinterest || '',
				linkedIn: driver?.personalInfo?.linkedIn || '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				onFormSubmit?.(values)
				setSubmitting(false)
			}}
		>
			{({touched, errors, resetForm}) => (
				<Form>
					<FormContainer>
							<DriverInfoForm touched={touched} errors={errors} />
						<Tabs defaultValue="driverInfo">
							<TabList>
								<TabNav value="driverInfo">Driver Information</TabNav>
							</TabList>
							<div className="p-6">
								<TabContent value="driverInfo">
									<DriverInfoForm touched={touched} errors={errors} />
								</TabContent>
							</div>
						</Tabs>
					</FormContainer>
				</Form>
			)}
		</Formik>
	)
})

export default DriverForm
