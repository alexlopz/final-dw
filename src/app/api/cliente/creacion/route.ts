import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { nombres, apellidos, genero, fecha_nacimiento, estado } = body;

    if (!nombres || !apellidos || !genero || !fecha_nacimiento || !estado) {
      return NextResponse.json(
        { error: "Falta un campo requerido." },
        { status: 400 }
      );
    }

    const cliente = await prisma.cliente.create({
      data: {
        nombres,
        apellidos,
        genero,
        fecha_nacimiento,
        estado,
        fecha_creacion: new Date(),
      },
    });

    return NextResponse.json(cliente, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al crear el cliente." },
      { status: 500 }
    );
  }
};
