import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react'

const SelectField = (props) => {

    const {label, options} = props;
    const [value, setValue] = useState('');

    const handleChange = () => {}

  return (
    <Box mt={3} width='100%'>
        <FormControl size='small' fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                {/* {options.map(({id, name}) => (
                    <MenuItem></MenuItem>
                ))} */}
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectField