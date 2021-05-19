import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
	[theme.breakpoints.down('sm')]: {
		mainContainer: {
			flexDirection: 'column-reverse',
		},
	},
	appBarSearch: {
		borderRadius: 4,
		marginBottom: '1rem',
		display: 'flex',
		padding: '16px',
	},
	pagination: {
		borderRadius: 4,
		marginTop: '1rem',
		padding: '16px',
	},
	searchButton: {
		backgroundColor: '#4caf50',
	},
	// mainContainer: {
	// 	[theme.breakpoints.down('sm')]: {
	// 		width: '750px',
	// 	},
	// },
}));
