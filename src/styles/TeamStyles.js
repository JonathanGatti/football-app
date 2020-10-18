import { makeStyles } from '@material-ui/core/styles';
import background from '../imgs/background.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${background})`,
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    height: '80%',
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerContainer : {
    width: '300px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    marginTop: theme.spacing(1),
    backgroundColor: 'transparent',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;