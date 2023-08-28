import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        code: 0,
        data: {},
        message: '请求成功'
    })
}