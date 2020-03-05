import React, { Component } from 'react';
import Loader from './comp/exr'
import { JSONViewer } from './comp/jsv'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept=""
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
        Загрузите файл
        </Button>
      </label>
    </div>
  );
}
export class App extends Component {
  state = {
    isLoading: true,
    data: []
  }
  render() {
    const { isLoading, data } = this.state
    return (
      <div className="Container">
        {
          isLoading
            ? <Loader />
            : <JSONViewer name="Список" value={data} level={0} />
        }
      </div>
    )
  }
}





/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Выберите файл
        </Button>
      </label>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />
    </div>
  );
} */