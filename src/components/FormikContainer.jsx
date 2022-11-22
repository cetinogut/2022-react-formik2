import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from './FormikControl';

const FormikContainer = () => {
    const dropdownOptions =[
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]
    const radioOptions = [
        { key: 'Option 1', value: 'rOption1' },
        { key: 'Option 2', value: 'rOption2' },
        { key: 'Option 3', value: 'rOption3' }
      ]
      const checkboxOptions = [
        { key: 'Option 1', value: 'cOption1' },
        { key: 'Option 2', value: 'cOption2' },
        { key: 'Option 3', value: 'cOption3' }
      ]
    const initialValues = {
        email:'',
        description:'',
        selectOption:'',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    };

    const validationSchema = Yup.object({
        email:Yup.string().required('email is required!'),
        description:Yup.string().required('description is required!'),
        selectOption:Yup.string().required('this area is required!'),
        radioOption: Yup.string().required('this area is Required'),
        checkboxOption: Yup.array().required('this is Required'),
        birthDate: Yup.date().required('Required').nullable()
    });
    
    const onSubmit = values => {
        console.log('Form DATA : ', values);
        console.log('Saved dATA :', JSON.parse(JSON.stringify(values)));
    }
    
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {formik =>  (
            <Form>
                <FormikControl 
                    control='input' 
                    type='email' 
                    label='Email'
                    name='email'
                />

                <FormikControl 
                    control='textarea' 
                    label='Description'
                    name='description'
                />

                <FormikControl 
                    control='select' 
                    label='Select a topic'
                    name='selectOption'
                    options={dropdownOptions}
                />

                <FormikControl
                    control='radio'
                    label='Radio topic'
                    name='radioOption'
                    options={radioOptions}
                />

                <FormikControl
                    control='checkbox'
                    label='Checkbox topics'
                    name='checkboxOption'
                    options={checkboxOptions}
                />    

                <FormikControl
                    control='date'
                    label='Pick a date'
                    name='birthDate'
                />

                <button type='submit'>Submit</button>
            </Form>
          )}

    </Formik>
  )
}

export default FormikContainer