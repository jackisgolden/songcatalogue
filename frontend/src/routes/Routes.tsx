import { AuthRequired } from './AuthRequired'
import { Routes as RRoutes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Profile } from '../pages/Profile/Profile'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { ArtistDetails } from '../pages/ArtistDetails/ArtistDetails'
import { SongDetails } from '../pages/SongDetails/SongDetails'
import { AlbumDetails } from '../pages/AlbumDetails/AlbumDetails'

import { Review } from '../pages/Review/Review'
import { SignUp } from '../pages/SignUp/SignUp'

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
      >
        {/* <Route index element={<DefaultHomePage />} /> */}
        <Route path="user/:username" element={<Profile />}>
          {/* Nested routes under user/:username */}
          <Route path="review">
            <Route path=":id" element={<Review />} />
          </Route>
        </Route>
        {/* <Route path="compose/review" element={<NewReview />} /> */}
        <Route path="song/:songId" element={<SongDetails />} />
        <Route path="artist/:artistId" element={<ArtistDetails />} />
        <Route path="album/:albumId" element={<AlbumDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </RRoutes>
  )
}