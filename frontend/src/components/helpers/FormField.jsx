import { FormControl, FormLabel, Input, FormErrorMessage, Select } from '@chakra-ui/react'
import React from 'react'


const FormField = (props) => {
    const { value, label, onChange, id, type, placeholder, isInvalid, errorMsg } = props;
    
    if (type === 'select') {
        return (
            <FormControl isInvalid={isInvalid} mb={2} id={id}>
                <FormLabel>{label}</FormLabel>
                <Select value={value} onChange={(e) => onChange(e.target.value)}>
                    {props.children}
                </Select>
                {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
            </FormControl>
        )
    }

    return (
        <FormControl isInvalid={isInvalid} mb={2} id={id}>
            <FormLabel>{label}</FormLabel>
            <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                placeholder={placeholder}
            />
            {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
        </FormControl>
    )

}


export default FormField