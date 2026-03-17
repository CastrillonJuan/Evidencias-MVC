export const TEAMQUERIES = {
  CREATE_TEAM:
    "INSERT INTO teams (name, created_by) VALUES ($1, $2) RETURNING *",
  GET_TEAMS: "SELECT * FROM teams",
  ADD_MEMBER:
    "INSERT INTO team_members (team_id, member_id) VALUES ($1, $2) RETURNING *",
};
