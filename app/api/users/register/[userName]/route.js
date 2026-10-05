import { prisma } from "@/prisma/User";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';

export async function GET(request, { params }){
    try{
        const { userName } = params;

        const registerUser = await prisma.Register.findFirst({
            where: {
                userName
            }
        });

        if(!registerUser){
            return NextResponse.json({
                message: 'Page Note found'
            }, {
                status: 404
            })
        }

        return NextResponse.json({message: "Success", registerUser: registerUser})
    } catch(error) {
        return NextResponse.json({message: 'Record Not Foud!', error}, {status: 500})
    }
}