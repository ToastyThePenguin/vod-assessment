import { Box, CircularProgress, Typography } from '@mui/material';
import Navbar from '../components/navbar';
import PageWrapper from '../components/pageWrapper';
import BoxCentredRow from '../components/boxCentredRow';
import BoxColumn from '../components/boxColumn';
import { useEffect, useState } from 'react';
import ContentService from '../services/contentService';
import { useParams, useNavigate } from 'react-router-dom';
import Helpers from '../utils/helpers';
import BoxRow from '../components/boxRow';

const image = require('../assets/placeholder.png')

const SeriesPage = () => {
    const { guid } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [series, setSeries] = useState<any>(null);
    const [loadingSeasons, setLoadingSeasons] = useState(false);
    const [seasons, setSeasons] = useState<any[]>([]);


    useEffect(() => {
        getSeries()
    }, [])

    const getSeries = async () => {
        if (!guid) return
        setLoading(true)
        const response = await ContentService.getOne(guid);
        if (!response || response === 'not found') return
        setSeries(response);
        setLoading(false)
    }

    useEffect(() => {
        if (!series) return
        getEpisodes()
    }, [series])

    const getEpisodes = async () => {
        if (!guid) return
        setLoadingSeasons(true)
        const response = await ContentService.getChildren(guid);
        if (!response || response === 'not found') return
        const groupedEps = series.seasons.map((season: any) => {
            const episodeData = response.filter((episode: any) => episode.season === season.season)
            episodeData.sort((a: any, b: any) => a.episode - b.episode);
            season.episodeData = episodeData
            return season;
        });
        setSeasons(groupedEps);
        setLoadingSeasons(false)
    }

    const navigateToMedia = (mediaItem: any) => navigate(`/media/${mediaItem.guid}/`)

    const renderLineItem = (item: any) => {
        const image = require('../assets/placeholder.png')
        return (
            <BoxColumn
                key={item.guid}
                sx={{
                    marginRight: 3,
                    backgroundImage:`url(${image})`,
                    minWidth: 150,
                    width: 150,
                    height: 200,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    padding: 1,
                    '&:hover': {
                        cursor: 'pointer'
                      },
                }}
                onClick={() => navigateToMedia(item) }
            >
                <Typography color={'white'} textAlign={'right'}>{`Episode ${item.episode}:`}</Typography>
                <Typography color={'white'} textAlign={'right'}>{`${item.name} | ${item.duration}min`}</Typography>
            </BoxColumn>
        )
    }

    const renderSeason = (season: any) => {
        return (
            <Box key={season.season} sx={{ marginBottom: 5 }}>
                <Typography variant={'h3'} color={'primary'} sx={{ marginBottom: 2 }}>{`Season ${season.season} | ${season.episodes} Episodes`}</Typography>
                <BoxRow sx={{ overflowX: 'scroll', paddingBottom: 1 }}>
                    {
                        season.episodeData.map((item: any) => renderLineItem(item))
                    }
                </BoxRow>
            </Box>
        )
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
                series
                ?
                <Box sx={{ width: '100%' }}>
                    <BoxColumn sx={{
                        backgroundImage:`url(${image})`,
                        width: '100%',
                        height: '40vh',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-start',
                        padding: 3,
                        marginBottom: 4
                    }}>
                        <Box sx={{ background: 'rgba(0,0,0,.2)', padding: 1 }}>
                            <Typography variant={'h1'} color={'white'} fontWeight={'bold'} sx={{ marginBottom: 2 }}>{series.name}</Typography>
                            <Typography color={'white'} variant={'h5'}>{`${series.year} | ${series.seasons.length} Seasons`}</Typography>
                            <Typography color={'white'} variant={'h5'}sx={{ marginBottom: 1 }}>{Helpers.formatGenres(series.genre)}</Typography>
                            <Typography color={'white'} sx={{ wordWrap: 'break-word', marginTop: 2 }}>{series.description}</Typography>
                        </Box>
                    </BoxColumn>
                </Box>
                :
                <div/>
            }
            {
                loadingSeasons
                ?
                <BoxCentredRow sx={{ width: '100%' }}>
                    <CircularProgress/>
                </BoxCentredRow> 
                :
                seasons && seasons.length > 0
                ?
                seasons.map(item => renderSeason(item))
                :
                <div/>
            }
        </Box>
    </PageWrapper>
    )
}

export default SeriesPage;