export interface MediaItem {
    name: string;
    guid: string;
    type: string;
    year: number;
    description: number;
    featured: boolean;
    genre: string[];
    duration?: number;
}

export interface Episode extends MediaItem {
    season: number;
    episode: number;
}


export interface Season {
    season: number;
    episodes: number;
    episodeData: Episode[];
}

export interface Series extends MediaItem {
    seasons: Season[];
}

export interface Collection extends MediaItem {
    children: MediaItem[];
}