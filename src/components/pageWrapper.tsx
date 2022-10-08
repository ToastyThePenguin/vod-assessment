import React from 'react';
import { Box } from '@mui/material';

const PageWrapper: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 2,
      }}
    >
      {children}
    </Box>
  )
}

export default PageWrapper
