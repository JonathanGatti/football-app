import { makeStyles } from '@material-ui/core/styles';
import transitions from '@material-ui/core/styles/transitions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    marginTop: '2rem'
  },
  container: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
  },
  linkBtn: {
    color: 'white',
    margin: '2rem',
    padding: '50px 50px',
    textTransform: 'uppercase',
    backgroundColor:'rgba(45,37,83,1.0)',
    textAlign: 'center',
    '&:hover':{
      transform: 'scale(1.08) translateY(-5px)'
    },
    transition: 'all 0.2s ease-out'
  },
}));

export {useStyles};