# VoD Assessment

As per the assessment spec, this project creates a React app containing a landing page with categorized showreels of media collections as well as a cycling hero component of featured content.

Additionally, clicking on a media item will either take the user to a new page where they would play the media or, in the case of series, a dedicated page showing an overview of the series with episodes grouped by season.

A deployed (via Amplify) version of the app can be found [https://master.d199m9q8dcc7n6.amplifyapp.com/](here).


## Instructions for Local Operation

Just like any out of the box CRA, simply follow these steps to get up and running in your local environment:
### add .env file containing `REACT_APP_API_URL=https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage` //NB: placing this sort of info in a README would be highly inadvisable under any other circumstances

### `npm install`

### `npm start`

### profit

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


## Challenges and Limitations

Unfortunately I was not able to make use of the actual background or poster images for media due to not having the base S3 URL.
Additionally so for streaming the actual content. More so, due to my unfamiliarity with video playback and streaming media, this functionality was omitted.


## Proposed Improvements

Given more time I would greatly improve the UX and UI. Giving the featured hero component interaction should the user wish to manually scroll through it. Include quality of life visual cues such as enlarging or highlighting when a user hovers over an item. Build out dedicated pages for movies and series. Build out a functional video player page.

Additionally, with more time and given the proposed larger scope, I would implement Redux state management, enforce stronger typing and make greater use of shared components (e.g. for media cards in showreels).
