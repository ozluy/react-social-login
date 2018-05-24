import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import Yup from 'yup'
import Input from 'components/Input'
import Button from 'components/Button'
import enhancers from './enhancers'

const CompleteRegister = ({ register }) => (
  <div>
    <h1>Add Additional Fields to Complete Register</h1>
    <Formik
      initialValues={{
        email: register.registerData.email || '',
        firstName: register.registerData.firstName || '',
        lastName: register.registerData.lastName || '',
        picture: register.registerData.picture,
        jobTitle: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
        const fullRegisterData = Object.assign(register.registerData, values)
        alert(
          JSON.stringify(JSON.parse(JSON.stringify(fullRegisterData)), null, 2)
        )
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Enter valid email!')
          .required('Email is required!'),
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        jobTitle: Yup.string().required('Required'),
      })}
      render={({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit}>
          {values.picture && (
            <img width={100} alt="Profile" src={values.picture} />
          )}
          <Input
            name="email"
            type="text"
            placeHolder="Email"
            onChange={handleChange}
            value={values.email}
            hasError={touched.email && Boolean(errors.email)}
            errorMessage={errors.email}
            onBlur={handleBlur}
          />
          <Input
            name="firstName"
            type="text"
            placeHolder="First Name"
            onChange={handleChange}
            value={values.firstName}
            hasError={touched.firstName && Boolean(errors.firstName)}
            errorMessage={errors.firstName}
            onBlur={handleBlur}
          />
          <Input
            name="lastName"
            type="text"
            placeHolder="Last Name"
            onChange={handleChange}
            value={values.lastName}
            hasError={touched.lastName && Boolean(errors.lastName)}
            errorMessage={errors.lastName}
            onBlur={handleBlur}
          />
          <Input
            name="jobTitle"
            type="text"
            placeHolder="Job Title"
            onChange={handleChange}
            value={values.jobTitle}
            hasError={touched.jobTitle && Boolean(errors.jobTitle)}
            errorMessage={errors.jobTitle}
            onBlur={handleBlur}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            label="Submit"
            data-text="Submit"
          />
        </form>
      )}
    />
  </div>
)

CompleteRegister.propTypes = {
  register: PropTypes.object.isRequired,
}

export default enhancers(CompleteRegister)
