import React from 'react'
import { FormControl, FormLabel, FormHelperText, Input } from '@chakra-ui/react'


export default function Input({label, ...props}) {
    const [field, meta] = useField(props)
    return (
        <div>
            <FormControl id="first-name" isRequired>
                <FormLabel htmlFor={field.name}>{label}</FormLabel>
                <Input placeholder={label} />
            </FormControl>
        </div>
    )
}
