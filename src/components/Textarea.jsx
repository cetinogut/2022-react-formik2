import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Textarea(props) {
    const { label, name, ...otherFormikProps } = props
    return (
      <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='textarea' id={name} name={name} {...otherFormikProps} />
        <ErrorMessage component={TextError} name={name} />
      </div>
    )
}

export default Textarea