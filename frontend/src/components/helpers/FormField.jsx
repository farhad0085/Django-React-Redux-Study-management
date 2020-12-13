import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'


const FormField = ({ value, label, onChange, id, type, placeholder }) => {

    return (
        <FormControl mb={2} id={id}>
            <FormLabel>{label}</FormLabel>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                placeholder={placeholder}
            />
        </FormControl>
    )

}


export default FormField