import { prisma } from "@/prisma/User";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = 'force-dynamic';

export async function GET(request, { params }){
  try {

      const { passportNumber }  = params;
  
      const user = await prisma.User.findFirst({
          where: {
            passportNumber
          }
      });
  
      if (!user) {
          return NextResponse.json({
              message: 'Page Not found'
          },{
              status: 404
          })
      }
  
      return NextResponse.json({ message: "Success", user: user });
  } catch (error) {
    return NextResponse.json({message: 'Record Not Foud!', error}, {status: 500})
  }
 
}