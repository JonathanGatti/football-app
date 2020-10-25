import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white'
  },
  container: {
    width: '60%',
    height: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  paper: {
    width: 200,
    margin: '2rem',
    color: 'white',
    textTransform: 'uppercase',
    backgroundColor:'#38b927',
    opacity: '0.7',
    textAlign: 'center',
    padding: '74px 0',
    '&:hover':{
      transform: 'scale(1.08) translateY(-5px)'
    },
    transition: 'all 0.2s ease-out'
  },
}));

export {useStyles};