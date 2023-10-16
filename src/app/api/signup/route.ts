import {connect} from "@/dbConfig/dbConfig"
import User from "@/models/userModel"
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs"



connect();

export aysc function POST (request:NextRequest){
    try {
        const reqBody=await request.json();
        const {username,email,password}=reqBody
    } catch (error:any) {
        return NextRequest.json({error:error.message},{status:500})   
    }
}
