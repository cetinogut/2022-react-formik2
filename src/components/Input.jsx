import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

const Input = (props) => {
    const { label, name, ...otherFormikProps } = props
    return (
      <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...otherFormikProps} />
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
}

export default Input