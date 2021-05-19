import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 0',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '10px 50px',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
		},
	},
	heading: {
		color: '#4caf50',
		textDecoration: 'none',
		fontWeight: 300,
	},
	image: {
		marginLeft: '15px',
		// marginTop: '5px',
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '400px',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
		},
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between',
		width: '400px',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			width: 'auto',
			marginTop: 20,
			justifyContent: 'center',
		},
	},
	userName: {
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('sm')]: {
			marginLeft: '5px',
			marginRight: '5px',
			
		},
	},
	brandContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500],
	},
	// [theme.breakpoints.down('sm')]: {
	// 	appBar: {
	// 		padding: '10px 20px',
	// 	},
	// 	heading: {
	// 		display: 'none',
	// 	},
	// 	userName: {
	// 		display: 'none',
	// 	},
	// 	image: {
	// 		marginLeft: '5px',
	// 	},
	// 	toolbar: {
	// 		display: 'flex',
	// 		justifyContent: 'flex-end',
	// 		width: '160px',
	// 	},
	// },
}));
