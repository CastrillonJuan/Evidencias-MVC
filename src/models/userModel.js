import DBConnection from "../db/dbconn.js";

export const crearUsuario = async (name, email, password) => {
    const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
    const values = [name, email, password];
    const result = await DBConnection.query(query, values);
    return result.rows[0];
};

export const buscarUserPorCorreo = async (email) => {
    const query = "SELECT * FROM users WHERE email = $1";
    const values = [email];
    const result = await DBConnection.query(query, values);
    return result.rows[0];
};