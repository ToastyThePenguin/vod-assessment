import { makeStyles } from '@mui/material/styles';

const defaultStyles: any = makeStyles((theme: any) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  centredRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePicker: {
    fontFamily: 'sans-serif'
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  searchBar: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: '20px',
      },
    },
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  centredColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    '& .MuiInputBase-root': {
      backgroundColor: 'white',
      borderRadius: 12,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: 12,
      },
      '& input': {
        background: 'white',
        borderRadius: 12
      },
      '& textArea': {
        background: 'white',
        borderRadius: 12,
      }
    },
  },
  boxHover: {
    '&:hover': {
      boxShadow: '0px 5px 7px #00000066'
    },
  },
  boxShadow: { boxShadow: '0px 3px 5px #00000022' },
  toggleButtonGroup: {
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      '& .Mui-disabled': {
        border: 0,
      },
    },
  },
  iconButtonHover: {
    color: '#C9C9C9',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      borderRadius: 15
    }
  }
}));
export default defaultStyles;
