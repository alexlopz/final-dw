/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const clientes = await prisma.cliente.findMany({
      orderBy: [{ fecha_creacion: "desc" }, { apellidos: "desc" }],
    });
    return NextResponse.json(clientes, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al obtener los clientes." },
      { status: 500 }
    );
  }
};
