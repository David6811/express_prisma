import { Request, Response } from 'express';
import { findAll } from '../service/deviceService';

export async function device(req: Request, res: Response) {
        try {
                const devices = await findAll();
                res.json({ devices });
        } catch (error: any) {
                res.status(400).json({ error: error.message });
        }
}


