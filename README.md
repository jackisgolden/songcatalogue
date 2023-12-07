# Groovy

A webapp for viewing and rating songs - can follow friends + get recomendations.


You can see:
 - Artist name
 - Song name
 - Album
 - Genre?
 - Length of song
 - Constituent notes? (MIDI data)
 - Friends ratings of songs
 - Optional written reviews of songs
 - 

Supports:
 -  Song rating
 -  Follow friends
 -  Recomendation system


## File Organization

 - `docs`: contains all deliverables
 - `db`: contains database code
 - `frontend`: Vite + TypeScript + React
 - `backend`: Express + Node + 
 -

## Development Tips

Build and start docker images
```sh
docker-compose up --build
```

Tear down images
```sh
docker-compose down
```

Connect to the `psql-container` inside a shell
```sh
docker exec -it psql-container /bin/bash
```

Once inside the shell, connect to database:
```sh
psql postgresql://user:password@localhost:5432/groovy
```