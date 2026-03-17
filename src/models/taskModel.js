import pool from "../db/dbconn.js";

export const getTasks = async () => {
    const result = await pool.query("SELECT * FROM tasks");
    return result.rows;
};

export const createTask = async (title, description, userId, teamId) => {
    const query = `
        INSERT INTO tasks (title, description, assigned_to, team_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;
    const result = await pool.query(query, [title, description, userId, teamId]);
    return result.rows[0];
};

export const updateTask = async (id, title, description) => {
    const query = `
        UPDATE tasks
        SET title = $1, description = $2
        WHERE id = $3
        RETURNING *;
    `;
    const result = await pool.query(query, [title, description, id]);
    return result.rows[0];
};

export const deleteTask = async (id) => {
    await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
};
