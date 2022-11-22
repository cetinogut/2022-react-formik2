import React from 'react'
import { Field } from 'formik'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react'

function ChakraInput (props) {
  const { label, name, ...otherFormikProps } = props
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <Input id={name} {...otherFormikProps} {...field} />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

export default ChakraInput