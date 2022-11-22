import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError';

function Select(props) {
    const { label, name, options, ...allOtherProps} = props;

  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='select' id={name} name={name} {...allOtherProps}> 
            {
                options.map( option => {
                    return(
                        <option key={option.value} value={option.value}>{option.key}</option>
                    )
                })
            }
        </Field>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select