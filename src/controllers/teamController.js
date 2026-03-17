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
  //   try {
  //     const { name, created_by } = req.body;

  //     const result = await DBConnection.query(
  //       TEAMQUERIES.CREATE_TEAM,
  //       [name, created_by]
  //     );

  //     res.status(201).json(result.rows[0]);
  //   } catch (error) {
  //     next(error);
  //   }
  console.log("POST funcionando");
  res.send("OK");
};

export const addMembers = async (req, res, next) => {
  try {
    const { teamId } = req.params;
    const { user_id } = req.body;
    const result = await DBConnection.query(TEAMQUERIES.ADD_MEMBERS, [
      team_id,
      user_id,
    ]);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
