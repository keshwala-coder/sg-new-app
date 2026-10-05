import { prisma } from "@/prisma/RegisterUser";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(req){
    try {
        const body = await req.json();
        const userData = await prisma.Register.create({
            data: body
        })
        let json_response = {
            status: "success",
            data: {
                userData,
            },
        };
        return new NextResponse(JSON.stringify(json_response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
          });
    }catch(error){
        let error_response = {
            status: "error",
            message: error.message,
          };
        return new NextResponse(JSON.stringify(error_response), {
        status: 500,
        headers: { "Content-Type": "application/json" },
        });
    }
}