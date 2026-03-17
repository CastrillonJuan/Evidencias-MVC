console.log("teamRoutes cargado");
import { Router } from 'express';
import { getTeams, createTeam, addMembers } from '../controllers/teamController.js';

const router = Router();

router.get('/teams', getTeams);
router.post('/teams', createTeam);
router.post('/teams/:teamId/members', addMembers);

export default router;