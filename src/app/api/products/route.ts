import { NextResponse } from "next/server";
export function GET() {
    return NextResponse.json({ message: "Get data products" });
}

export function POST() {
    return NextResponse.json({ message: "Post data products" });
}