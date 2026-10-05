
import { prisma } from "@/prisma/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// const allowedOrigin = "http://localhost:3000";


export async function POST(request) {
  try {
    const body = await request.json();

    console.log("request Body", body);

    const { passportNumber, dob } = body;

    if (!passportNumber || !dob) {
      return NextResponse.json(
        {
          message: "Passport number and date of birth are required",
          received: body
        },
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": allowedOrigin,
          },
        }
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        passportNumber: passportNumber,
        dob: dob,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          message: "Passport number or date of birth is incorrect",
        },
        {
          status: 404,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    return NextResponse.json(
      {
        message: "Success",
        user,
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
