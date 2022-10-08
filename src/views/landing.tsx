import { useEffect, useState, useRef } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import BoxRow from '../components/boxRow';
import Navbar from '../components/navbar';
import ContentService from '../services/contentService';
import PageWrapper from '../components/pageWrapper';
import BoxColumn from '../components/boxColumn';
import BoxCentredRow from '../components/boxCentredRow';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [collections, setCollections] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [featuredIndex, setFeaturedIndex] = useState(0);

    const useInterval = (callback: any, delay: number | null) => {
        const savedCallback: any = useRef();
        // Remember the latest callback.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
    }
    useInterval(() => setFeaturedIndex(featuredIndex === featured.length -1 ? 0 : featuredIndex + 1), 5000)  
    
    // on load fetch content
    // would only be updated ~daily therefore no need to constantly refresh
    useEffect(() => {
    getCollections()
    }, [])

    const getCollections = async() => {
    setLoading(true);
    const response = await ContentService.getByType('collection');
    if (!response || response === 'not found') return
    setCollections(response);

    // find featured media
    const flattenedCollections = response.reduce((arr: any[], collection: any) => arr.concat(collection.children), [])
    const filteredArr = flattenedCollections.filter((item: any) => item.featured)
    setFeatured(filteredArr)
    setLoading(false);
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
                <Typography color={'white'} textAlign={'right'}>{item.name}</Typography>
            </BoxColumn>
        )
    }

    const renderCollection = (collection: any) => {
        return (
            <Box key={collection.guid} sx={{ marginBottom: 5 }}>
                <Typography variant={'h3'} color={'primary'} sx={{ marginBottom: 2 }}>{collection.name}</Typography>
                <BoxRow sx={{ overflowX: 'scroll', paddingBottom: 1 }}>
                    {
                        collection.children.map((item: any) => renderLineItem(item))
                    }
                </BoxRow>
            </Box>
        )
    }

    const renderFeatured = () => {
        const featuredItem: any = featured[featuredIndex]
        const image = require('../assets/placeholder.png')
        return (
            <BoxColumn sx={{
                backgroundImage:`url(${image})`,
                width: '100%',
                height: '60vh',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                padding: 3,
                marginBottom: 4
            }}>
                <Box sx={{ background: 'rgba(0,0,0, .2)', padding: 1, maxWidth: '60%' }}>
                    <Typography variant={'h1'} color={'white'} fontWeight={'bold'} sx={{ marginBottom: 2 }}>{featuredItem.name}</Typography>
                    <Typography color={'white'} variant={'h5'}>{`${featuredItem.year} | ${featuredItem.duration ? `${featuredItem.duration}min` : ''}`}</Typography>
                    <Typography color={'white'} variant={'h5'}sx={{ marginBottom: 1 }}>{featuredItem.genre.reduce((str: string, genre: string) => str.concat(genre + ' | '), '')}</Typography>
                    <Typography color={'white'} sx={{ wordWrap: 'break-word' }}>{featuredItem.description}</Typography>
                </Box>
            </BoxColumn>
        )
    }

    return (
        <PageWrapper>
            <Navbar/>
            <Box sx={{ marginTop: 10, width: '100%' }}>
                {
                    loading
                    ?
                    <BoxCentredRow sx={{ width: '100%' }}>
                        <CircularProgress/>
                    </BoxCentredRow>                    
                    :
                    featured && featured.length > 0
                    ?
                    renderFeatured()
                    :
                    <div/>
                }
                {
                    loading
                    ?
                    <BoxCentredRow sx={{ width: '100%' }}>
                        <CircularProgress/>
                    </BoxCentredRow>                    
                    :
                    collections && collections.length > 0
                    ?
                    collections.map(item => renderCollection(item))
                    :
                    <div/>
                }
            </Box>
        </PageWrapper>
    )
}

export default LandingPage;