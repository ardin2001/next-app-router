import { NextRequest,NextResponse } from "next/server";
import { Login } from "@/app/lib/firebase/FetchUser";

export async function POST(req:NextRequest){
    const inputUser = await req.json()
    const response:any = await Login("users",inputUser);
    if(!response.status){
        return NextResponse.json({status:false,message:"Invalid Email",data:response.data})        
    }
    const hash = response?.data[0]?.password == inputUser.password
    if(hash){
        return NextResponse.json({status:true,message:"Login Success",data:{...response.data[0],password:"*****"}})        
    }
    return NextResponse.json({status:false,message:"Invalid Password",data:null})
}