import { TextField } from '@material-ui/core';
import React from 'react';

const InputTxt = ({ label, name, onChangue }) => {
	return (
		<TextField
			label={label}
			variant='outlined'
			margin='normal'
			name={name}
			required
			onChange={onChangue}
		/>
	);
};

export default InputTxt;
