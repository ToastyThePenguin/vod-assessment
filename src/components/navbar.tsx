import {
  Link as RouterLink,
  useNavigate,
} from 'react-router-dom';
import {
    Avatar,
    IconButton
} from '@mui/material';
import {
    ArrowBackIos,
    Notifications,
    Search,
} from '@mui/icons-material';
import BoxRow from './boxRow';
const logo = require('../assets/logo.png');
const profile = require('../assets/profile.jpg');

type Props = {
    showBackButton?: boolean
}

const Navbar = ({showBackButton}: Props) => {
  const navigate = useNavigate();
  return (
    <BoxRow sx={{
            margin: 2,
            justifyContent: 'space-between',
            width: '90%',
            top: 0,
            position: 'fixed',
            zIndex: 2000,
            padding: 2,
            background: 'rgba(0,0,0,.1)'
        }}
    >
        <BoxRow sx={{ width: '20%' }}>
            {
                showBackButton
                    ?
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIos color={'primary'}/>
                    </IconButton>
                    :
                    <div/>
            }
        </BoxRow>
        <RouterLink to={'/'}>
          <img height={'40'} width={'auto'} src={logo}/>
        </RouterLink>
        <BoxRow sx={{ width: '20%', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => {}} sx={{ marginRight: 2 }}>
                <Search color={'primary'}/>
            </IconButton>
            <IconButton onClick={() => {}} sx={{ marginRight: 2 }}>
                <Notifications color={'primary'}/>
            </IconButton>
            <Avatar variant={'circular'} style={{ height: 40, width: 40 }} src={profile}/>
        </BoxRow>
    </BoxRow>
  );
};

export default Navbar;
