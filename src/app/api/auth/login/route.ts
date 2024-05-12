import { NextRequest,NextResponse } from "next/server";
import { GetByAtribute } from "@/app/lib/firebase/FetchData";
import * as argon2 from "argon2";

export async function POST(req:NextRequest){
    const inputUser = await req.json()
    const response:any = await GetByAtribute("users",inputUser);
    if(!response.status){
        return NextResponse.json({status:false,message:"Invalid Email",data:response.data})        
    }

    // const hash = await argon2.verify(response?.data[0]?.password, inputUser.password);
    if(true){
        return NextResponse.json({status:true,message:"Login Success",data:response.data})        
    }
    return NextResponse.json({status:false,message:"Invalid Password",data:null})
}