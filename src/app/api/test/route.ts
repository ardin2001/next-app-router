import { NextRequest,NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    if(url){
        return NextResponse.json({ message: "Hello, Next.js!",url });
    }
    return NextResponse.json({ message: "Hello, Next.js!",url });
}