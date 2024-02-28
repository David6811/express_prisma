import { Request, Response } from 'express';

export async function device(req: Request, res: Response) {
        res.json({ "name":"device" });
}
