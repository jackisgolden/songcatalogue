import pandas as pd
import pymysql
import sqlalchemy

# Load the CSV into a pandas DataFrame
df = pd.read_csv('dataset.csv')

# Create a connection to the database
engine = sqlalchemy.create_engine('mysql+pymysql://username:password@localhost/groovy')

# Iterate over DataFrame and insert rows into the database
for index, row in df.iterrows():
    # Insert into Artists table
    artist = pd.DataFrame({'Name': [row['Artist Name']], 'Genre': [row['Genres']]})
    artist.to_sql('Artists', con=engine, if_exists='append', index=False)
    
    # Get the inserted artist ID
    artist_id = pd.read_sql('SELECT LAST_INSERT_ID()', con=engine).iloc[0,0]

    # Insert into Albums table
    album = pd.DataFrame({'AlbumName': [row['Album']], 'ArtistID': [artist_id]})
    album.to_sql('Albums', con=engine, if_exists='append', index=False)

