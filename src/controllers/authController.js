import bcrypt from "bcrypt";
import { crearUsuario, buscarUserPorCorreo } from "../models/userModel.js";

// register
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const nuevoUsuario = await crearUsuario(name, email, hashedPassword);
        const { password: _, ...userSafe } = nuevoUsuario;

        res.status(201).json({
            message: "Usuario registrado",
            user: userSafe
        });

    } catch (error) {
        res.status(500).json({ error: "Error al registrar usuario" });
    }
};

// Login
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {

        // Buscar usuario por correo
        const user = await buscarUserPorCorreo(email);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Compara contraseñas
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        const { password: _, ...userSafe } = user;

        res.status(200).json({
            message: "Inicio de sesión exitoso",
            user: userSafe
        });

    } catch (error) {
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
};