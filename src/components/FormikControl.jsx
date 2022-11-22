import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import RadioButtons from './RadioButtons';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from './DatePicker';
import ChakraInput from './ChakraInput';

const FormikControl = (props) => {
    const { control, ...otherFormikProps } = props;
    switch(control) {
        case 'input':
        return <Input {...otherFormikProps} />
    case 'textarea':
      return <Textarea {...otherFormikProps} />
    case 'select':
      return <Select {...otherFormikProps} />
    case 'radio':
      return <RadioButtons {...otherFormikProps} />
    case 'checkbox':
      return <CheckboxGroup {...otherFormikProps} />
    case 'date':
      return <DatePicker {...otherFormikProps} />
    case 'chakraInput':
      return <ChakraInput {...otherFormikProps} />
    default:
      return null
    }
}

export default FormikControl