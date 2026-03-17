import { DBConnection } from "../db/dbconn.js";
import { TEAMQUERIES } from "../models/teamModel.js";

export const getTeams = async (req, res, next) => {
  try {
    const result = await DBConnection.query(TEAMQUERIES.GET_TEAMS);
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const createTeam = async (req, res, next) => {
  try {
    const { name, created_by } = req.body;

    const result = await DBConnection.query(TEAMQUERIES.CREATE_TEAM, [
      name,
      created_by,
    ]);

    console.log(result.rows);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const addMembers = async (req, res, next) => {
  try {
    const { teamId } = req.params;
    const { user_id } = req.body;

    const result = await DBConnection.query(TEAMQUERIES.ADD_MEMBER, [
      teamId,
      user_id,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
