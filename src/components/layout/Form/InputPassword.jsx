import React from 'react';
import {
	FormControl,
	InputAdornment,
	OutlinedInput,
	InputLabel,
	IconButton,
} from '@material-ui/core';
import { VisibilityOff, Visibility } from '@material-ui/icons';

const InputPassword = ({
	label,
	showPassword,
	setShowPassword,
	name,
	onChangue,
}) => {
	return (
		<FormControl
			variant='outlined'
			size='small'
			required
			margin='normal'>
			<InputLabel htmlFor='password'>{label}</InputLabel>
			<OutlinedInput
				label='Password'
				type={!showPassword ? 'password' : 'text'}
				id={name}
				name={name}
				//value={password}
				onChange={onChangue}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							onClick={() =>
								setShowPassword(!showPassword)
							}>
							{!showPassword ? (
								<Visibility />
							) : (
								<VisibilityOff />
							)}
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	);
};

export default InputPassword;
