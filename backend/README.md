# Backend

## Stack
### Nodejs
Backend

### Express
Routes and serves API requests

### Prisma
This ORM allows us to have type safety when querying the database.

## API

### Account Creation
- **Route**: POST /users
- **Functionality**: Create a new user account.

### Account Deletion
- **Route**: DELETE /users/:userId
- **Functionality**: Delete an existing user account.

### Login
- **Route**: POST /login
- **Functionality**: Authenticate user and return a JWT token.

### Password Change
- **Route**: PUT /users/:userId/password
- **Functionality**: Update user's password.

### Review Creation
- **Route**: POST /reviews
- **Functionality**: Create a review for a song.

### Follow/Unfollow Users/Artists
- **Route**: POST /followers and DELETE /followers
- **Functionality**: Follow or unfollow other users or artists.

### Playlist Management
#### Create/Modify Playlist
- **Route**: POST /playlists and PUT /playlists/:playlistId
- **Functionality**: Create a new playlist or modify an existing one.
