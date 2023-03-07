import React, { forwardRef } from 'react'
import { Tabs, FormContainer, FormItem} from 'components/ui'
import { Field, Form, Formik } from 'formik'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import * as Yup from 'yup'

dayjs.extend(customParseFormat)

const { TabNav, TabList, TabContent } = Tabs


const AdminEditForm = forwardRef((props, ref) => {

	const { initialValues, validationSchema, Form, customer, onFormSubmit } = props

	return (
		<Formik
			innerRef={ref}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, { setSubmitting }) => {
				onFormSubmit?.(values)
				setSubmitting(false)
			}}
		>
			{({touched, errors, resetForm}) => (
				<Form>
					<FormContainer>
						<div className="p-6">
							<Form touched={touched} errors={errors} />
						</div>
					</FormContainer>
				</Form>
			)}
		</Formik>
	)
})

export default AdminEditForm
