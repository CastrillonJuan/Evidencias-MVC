import {
    getTasks,
    createTask,
    updateTask,
    deleteTask
} from "../models/taskModel.js";

export const getAll = async (req, res) => {
    try {
        const tasks = await getTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener tareas" });
    }
};

export const create = async (req, res) => {
    try {
        const { title, description, userId, teamId } = req.body;

        const task = await createTask(title, description, userId, teamId);

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: "Error al crear tarea" });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const task = await updateTask(id, title, description);

        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar tarea" });
    }
};

export const remove = async (req, res) => {
    try {
        const { id } = req.params;

        await deleteTask(id);

        res.json({ message: "Tarea eliminada" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar tarea" });
    }
};