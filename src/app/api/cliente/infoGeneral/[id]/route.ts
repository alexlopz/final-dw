import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  console.log("id: ", id);

  try {
    const body = await req.json();
    const { direccion, telefono, email, saldo_mensual } = body;

    if (!direccion || !telefono || !email || !saldo_mensual) {
      return NextResponse.json(
        { error: "Falta un campo requerido." },
        { status: 400 }
      );
    }

    const clienteActualizado = await prisma.cliente.update({
      where: {
        id: parseInt(id),
      },
      data: {
        direccion,
        telefono,
        email,
        saldo_mensual,
        fecha_actualizacion: new Date(),
      },
    });

    return NextResponse.json(clienteActualizado, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error al actualizar el cliente" },
      { status: 500 }
    );
  }
};
