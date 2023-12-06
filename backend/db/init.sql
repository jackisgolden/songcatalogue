-- CreateTable
CREATE TABLE `Albums` (
    `AlbumID` INTEGER NOT NULL AUTO_INCREMENT,
    `AlbumName` VARCHAR(255) NOT NULL,
    `ArtistID` INTEGER NOT NULL,

    INDEX `ArtistID`(`ArtistID` ASC),
    PRIMARY KEY (`AlbumID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artists` (
    `ArtistID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Genre` VARCHAR(255) NULL,

    PRIMARY KEY (`ArtistID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Followers` (
    `UserID` INTEGER NOT NULL,
    `ArtistID` INTEGER NOT NULL,

    INDEX `ArtistID`(`ArtistID` ASC),
    PRIMARY KEY (`UserID` ASC, `ArtistID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Likes` (
    `UserID` INTEGER NOT NULL,
    `SongID` INTEGER NOT NULL,

    INDEX `SongID`(`SongID` ASC),
    PRIMARY KEY (`UserID` ASC, `SongID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Playlist_Songs` (
    `PlaylistID` INTEGER NOT NULL,
    `SongID` INTEGER NOT NULL,

    INDEX `SongID`(`SongID` ASC),
    PRIMARY KEY (`PlaylistID` ASC, `SongID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Playlists` (
    `PlaylistID` INTEGER NOT NULL AUTO_INCREMENT,
    `PlaylistName` VARCHAR(255) NOT NULL,
    `Image` VARCHAR(255) NULL,
    `UserID` INTEGER NOT NULL,

    INDEX `UserID`(`UserID` ASC),
    PRIMARY KEY (`PlaylistID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Reviews` (
    `ReviewID` INTEGER NOT NULL AUTO_INCREMENT,
    `UserID` INTEGER NOT NULL,
    `SongID` INTEGER NOT NULL,
    `Rating` INTEGER NOT NULL,
    `Text` TEXT NULL,
    `ReviewDate` DATE NOT NULL,

    INDEX `SongID`(`SongID` ASC),
    INDEX `UserID`(`UserID` ASC),
    PRIMARY KEY (`ReviewID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Songs` (
    `SongID` INTEGER NOT NULL AUTO_INCREMENT,
    `SongName` VARCHAR(255) NOT NULL,
    `FileName` VARCHAR(255) NOT NULL,
    `AlbumID` INTEGER NOT NULL,

    INDEX `AlbumID`(`AlbumID` ASC),
    PRIMARY KEY (`SongID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `UserID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(255) NOT NULL,
    `Email` VARCHAR(255) NOT NULL,
    `Password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Email`(`Email` ASC),
    PRIMARY KEY (`UserID` ASC)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Albums` ADD CONSTRAINT `Albums_ibfk_1` FOREIGN KEY (`ArtistID`) REFERENCES `Artists`(`ArtistID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Followers` ADD CONSTRAINT `Followers_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Followers` ADD CONSTRAINT `Followers_ibfk_2` FOREIGN KEY (`ArtistID`) REFERENCES `Artists`(`ArtistID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Likes` ADD CONSTRAINT `Likes_ibfk_2` FOREIGN KEY (`SongID`) REFERENCES `Songs`(`SongID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Playlist_Songs` ADD CONSTRAINT `Playlist_Songs_ibfk_1` FOREIGN KEY (`PlaylistID`) REFERENCES `Playlists`(`PlaylistID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Playlist_Songs` ADD CONSTRAINT `Playlist_Songs_ibfk_2` FOREIGN KEY (`SongID`) REFERENCES `Songs`(`SongID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Playlists` ADD CONSTRAINT `Playlists_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Reviews` ADD CONSTRAINT `Reviews_ibfk_2` FOREIGN KEY (`SongID`) REFERENCES `Songs`(`SongID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `Songs` ADD CONSTRAINT `Songs_ibfk_1` FOREIGN KEY (`AlbumID`) REFERENCES `Albums`(`AlbumID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

