import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/SnackBar';
import useSnackBar from './hooks/useSnackBar';

function SimpleSnackbar() {

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      
    </div>
  );
}

export default SimpleSnackbar;