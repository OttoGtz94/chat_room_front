import React from 'react';
import { Button } from '@material-ui/core';

const ButtonSubmit = ({ txt }) => {
	return (
		<Button
			variant='contained'
			size='large'
			color='primary'
			type='submit'>
			{txt}
		</Button>
	);
};

export default ButtonSubmit;
