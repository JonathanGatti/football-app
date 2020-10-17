import { makeStyles } from '@material-ui/core/styles';
import background from '../imgs/background.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    width: '100vw',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
  },
  container: {
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerContainer : {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    width: '200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'transparent'
  },
}));

export default useStyles;