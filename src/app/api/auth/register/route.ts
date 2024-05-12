import { NextRequest,NextResponse } from "next/server";
import { Register } from "@/app/lib/firebase/FetchUser";

export async function POST(req:NextRequest){
    const inputUser = await req.json()
    inputUser.verified = false
    const response = await Register("users",inputUser);
    if(response.status){
        return NextResponse.json({status:true,message:"Register Success",data:{...response.data,password:"*****"}})        
    }
    return NextResponse.json({status:false,message:"Register Failed",data:inputUser})
}