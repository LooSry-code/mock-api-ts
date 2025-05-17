import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Untuk __dirname di ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const data = await fs.readFile(path.join(__dirname, '../mocks/users.json'), 'utf-8');
    const users = JSON.parse(data);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to load users' });
  }
};