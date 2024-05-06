import { NextResponse,NextRequest } from "next/server";
import { revalidateTag } from 'next/cache'

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const tags = url.searchParams.get('tags');
    const secret = url.searchParams.get('secret');
    
    if(secret == '123' && tags){
        revalidateTag(tags);
        return NextResponse.json({ status: true,message: "Revalidate success",url });
    }
    return NextResponse.json({ status: false,message: "Revalidate failed",url });
}