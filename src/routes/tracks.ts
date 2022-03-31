import { Router } from 'express';
const router = Router();

import { addTrack, getTracks, getTrackByName, deleteTrack, updateTrack } from '../controllers/track.controller'

import { verifyToken, isOwnerTrack } from '../middlewares/authJWT'


router.get( "/", getTracks );

router.post( "/", [verifyToken], addTrack );

router.get( "/:id", getTrackByName );

router.delete( "/:id", [verifyToken, isOwnerTrack], deleteTrack );

router.put ( "/:id", [verifyToken, isOwnerTrack], updateTrack );

export default router;