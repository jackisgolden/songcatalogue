import { Request, Response } from "express";
import prisma from "../lib/prisma";

// PROFILE METHODS

// PLAYLIST METHODS
export const getPlaylists = async (req: Request, res: Response) => {
  try {
    const userId = req.body; // Assuming you have user authentication middleware
    const playlists = await prisma.playlist.findMany({
      where: { userId },
      include: { songs: true },
    });
    res.json(playlists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch playlists" });
  }
};

export const createPlaylist = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const userId = req.user.id; // Assuming you have user authentication middleware
    const playlist = await prisma.playlist.create({
      data: { name, userId },
    });
    res.json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create playlist" });
  }
};

export const deletePlaylist = async (req: Request, res: Response) => {
  try {
    const { playlistId } = req.params;
    await prisma.playlist.delete({
      where: { id: Number(playlistId) },
    });
    res.json({ message: "Playlist deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete playlist" });
  }
};

export const addSongToPlaylist = async (req: Request, res: Response) => {
  try {
    const { playlistId, songId } = req.params;
    await prisma.playlist.update({
      where: { id: Number(playlistId) },
      data: {
        songs: {
          connect: { id: Number(songId) },
        },
      },
    });
    res.json({ message: "Song added to playlist successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add song to playlist" });
  }
};

export const deleteSongFromPlaylist = async (req: Request, res: Response) => {
  try {
    const { playlistId, songId } = req.params;
    await prisma.playlist.update({
      where: { id: Number(playlistId) },
      data: {
        songs: {
          disconnect: { id: Number(songId) },
        },
      },
    });
    res.json({ message: "Song removed from playlist successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to remove song from playlist" });
  }
};

// REVIEW METHODS
export const getReview = async (req: Request, res: Response) => {};

export const createReview = async (req: Request, res: Response) => {};

export const deleteReview = async (req: Request, res: Response) => {};

export const modifyReview = async (req: Request, res: Response) => {};

// FOLLOWER METHODS
export const followUser = async (req: Request, res: Response) => {};

// SEARCH
export const search = async (req: Request, res: Response) => {};
