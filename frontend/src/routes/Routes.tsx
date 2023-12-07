import { AuthRequired } from './AuthRequired'
import { Routes as RRoutes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Profile } from '../pages/Profile/Profile'
import { Feed } from '../components/Feed/Feed'
import { NotFound } from '../pages/NotFound/NotFound'
import { ArtistDetails } from '../pages/ArtistDetails/ArtistDetails'
import { SongDetails } from '../pages/SongDetails/SongDetails'
import { AlbumDetails } from '../pages/AlbumDetails/AlbumDetails'
import { Review } from '../pages/Review/Review'
import { SignUp } from '../pages/SignUp/SignUp'
import { Playlist } from '../pages/Playlist/Playlist'
import Layout from '../components/Layout'

export const Routes = () => {
  return (
    <RRoutes>
      <Route
        path="/"
        element={
          <AuthRequired>
            <Layout />
          </AuthRequired>
        }
      >
        <Route index element={<Feed />} />
        <Route path="user/:username" element={
        <AuthRequired><Profile /></AuthRequired>}>
          <Route path="review">
            <Route path=":id" element={<Review />} />
          </Route>
        </Route>
        <Route path="song/:songId" element={<SongDetails />} />
        <Route path="artist/:artistId" element={<ArtistDetails />} />
        <Route path="album/:albumId" element={<AlbumDetails />} />
        <Route path="playlist/:pid" element={<Playlist />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </RRoutes>
  )
}