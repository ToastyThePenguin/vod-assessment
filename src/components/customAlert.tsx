import {
  Snackbar,
  Alert
} from '@mui/material';
import { useDispatch, useSelector } from '../store';
import { hideAlert } from '../slices/alert';
import { useEffect } from 'react';

const CustomAlert: React.FC = () => {
  const dispatch = useDispatch();
  const alert = useSelector((state: any) => state.alert)

  // auto-dismiss alert for success case
  useEffect(() => {
    if (alert.type === 'success') setTimeout(() => dispatch(hideAlert()), 1000)
  }, [alert.type])

  return (
    <Snackbar open={alert.show} onClose={() => dispatch(hideAlert())} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert onClose={() => dispatch(hideAlert())} severity={alert.type} variant={'filled'} style={{ borderRadius: 16 }}>
        {typeof alert.message === 'string' ? alert.message : ''}
      </Alert>
    </Snackbar>
  )
}

export default CustomAlert;
