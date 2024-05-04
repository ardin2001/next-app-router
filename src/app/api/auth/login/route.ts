import { NextRequest,NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    const request = await req.json()
    return NextResponse.json({ message: "Post data login",data:request });
}