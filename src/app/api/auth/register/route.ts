import { NextRequest,NextResponse } from "next/server";
import { PostData } from "@/app/lib/firebase/FetchData";

export async function POST(req:NextRequest){
    // const inputUser = await req.json()
    // inputUser.verified = false
    // const response = await PostData("users",inputUser);
    // if(response.status){
    //     return NextResponse.json({status:true,message:"Register Success",data:response.data})        
    // }
    return NextResponse.json({status:false,message:"Register Failed",data:null})
}