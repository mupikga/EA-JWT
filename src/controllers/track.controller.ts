import { Request, Response } from 'express'
import Track from '../models/Track';

export async function addTrack (req: Request, res: Response): Promise<Response> {
  const { title, singer, year, duration } = req.body;
  console.log('Creating track');
  const newTrack = {
    title: title,
    singer: singer,
    year: year,
    duration: duration
  }
  const track = new Track(newTrack);
  await track.save();
  console.log(track);

  return res.json({
    message: "Track created",
    track
  });
}


export async function getTracks (req: Request, res: Response): Promise<Response> {
  console.log('Get tracks');
  const tracks = await Track.find().populate('user');
  return res.json(tracks);
}

export async function getTrackByName(req: Request, res: Response): Promise<Response> {
  console.log('Get track');
  const id = req.params.id;
  const track = await Track.findById(id);
  return res.json(track);
}

export async function deleteTrack(req: Request, res: Response): Promise<Response> {
  console.log('Delete track');
  const id = req.params.id;
  const track = await Track.findByIdAndRemove(id);
  return res.json({
    message: "Track deleted",
    track
  });
}

export async function updateTrack(req: Request, res: Response): Promise<Response> {
  console.log('Update track');
  const _id = req.params.id;
  const { title, singer, year, duration } = req.body;
  const track = await Track.findByIdAndUpdate(_id, {
    title,
    singer,
    year,
    duration
  }, {new: true});
  return res.json({
    message: "Track updated",
    track
  });
}
