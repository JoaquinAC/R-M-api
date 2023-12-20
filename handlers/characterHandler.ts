import { Request, Response } from 'express';
const {getAllCharacters} = require ('../controllers/characterController') // Ajusta la ruta según tu estructura de archivos

export const getAllCharactersHandler = async (_req:Request,res:Response): Promise<void> => {
  try {
    let all = await getAllCharacters();
    res.json(all)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};