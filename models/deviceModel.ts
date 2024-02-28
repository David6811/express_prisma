import { PrismaClient, device as DeviceType } from '@prisma/client';

const prisma = new PrismaClient();

export async function findAllDevices(): Promise<DeviceType[] | null> {
    const foundDevices = await prisma.device.findMany();
    return foundDevices;
}
