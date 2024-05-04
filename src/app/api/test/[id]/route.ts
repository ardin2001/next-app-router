import { NextRequest,NextResponse } from "next/server";
export async function GET(request: NextRequest,{params}:{params:{id:string}}) {
    const url = new URL(request.url);
    return NextResponse.json({ message: "Route Test detail",pathname: url.pathname,id: params.id});
}