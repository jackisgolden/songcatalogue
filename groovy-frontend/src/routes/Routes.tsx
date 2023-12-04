import { AuthRequired } from './AuthRequired'
import { Routes as RRoutes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Profile } from '../pages/Profile/Profile'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { ArtistDetails } from '../pages/ArtistDetails/ArtistDetails'
import { SongDetails } from '../pages/SongDetails/SongDetails'
import { AlbumDetails } from '../pages/AlbumDetails/AlbumDetails'

import { NewReview } from '../pages/NewReview/NewReview'
import { Review } from '../pages/Review/Review'

// Twitter has `it so that when you click on a tweet, you get routed to /{USERNAME}/status/{TWEET_HASH}
// Composition of tweets is behind the url /compose/tweet.  But its also accessible throughout the SPA.
// Search is accessible from all views.
// SINGLE PAGE APPLICATION

export const Routes = () => {
    return (
      <RRoutes>
        <Route
          path="/"
          element={
            <AuthRequired>
              <Home />
            </AuthRequired>
          }
        />
        <Route
          path={'user'}
        >
          <Route
            path={':username'}
            element={
              <Profile />
            }
          />
        </Route>
        <Route
          path="review"
        >
          <Route
            path={'new'}
            element={
              <AuthRequired>
                <NewReview />
              </AuthRequired>
            }
          />
          <Route
            path={':id'}
            element={
              <Review />
            }
          />
        </Route>
        <Route path="/song">
          <Route path=":songId" element={<SongDetails />} />
        </Route>
        <Route path="/artist">
          <Route path=":artistId" element={<ArtistDetails />} />
        </Route>
        <Route
          path="/album"
        >
          <Route path=":albumId" element={<AlbumDetails />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </RRoutes >
    )
  }