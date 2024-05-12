import { NextResponse,NextRequest } from "next/server";
import { GetAll,GetById } from "@/app/lib/firebase/FetchData";

export async function GET(req:NextRequest) {
  // const id = req.nextUrl.searchParams.get('id')
  let data:any
  // if(id){
  //   data = await GetById('products',id)
  // }else{
  //   data = await GetAll('products')
  // }
  
  return NextResponse.json({
    status: true,
    message: "Get data products",
    data
  });
}

export function POST() {
  return NextResponse.json({ message: "Post data products" });
}
