import { Box, CircularProgress, getCardMediaUtilityClass, Typography } from '@mui/material';
import Navbar from '../components/navbar';
import PageWrapper from '../components/pageWrapper';
import BoxCentredRow from '../components/boxCentredRow';
import { useEffect, useState } from 'react';
import ContentService from '../services/contentService';
import { useParams } from 'react-router-dom';

const MediaItemPage = () => {
    const { guid } = useParams();

    const [loading, setLoading] = useState(false);
    const [media, setMedia] = useState<any>(null);

    useEffect(() => {
        getMedia()
    }, [])

    const getMedia = async () => {
        if (!guid) return
        setLoading(true)
        const response = await ContentService.getOne(guid);
        if (!response || response === 'not found') return
        setMedia(response);
        setLoading(false)
    }
    return (
        <PageWrapper>
        <Navbar showBackButton/>
        <Box sx={{ marginTop: 12, width: '100%' }}>
            {
                loading
                ?
                <BoxCentredRow sx={{ width: '100%' }}>
                    <CircularProgress/>
                </BoxCentredRow>                    
                :
                media
                ?
                <BoxCentredRow sx={{ width: '100%' }}>
                    <Typography variant={'h3'} color={'primary'}>{`Now playing: ${media.name}`}</Typography>
                </BoxCentredRow>
                :
                <div/>
            }
        </Box>
    </PageWrapper>
    )
}

export default MediaItemPage;