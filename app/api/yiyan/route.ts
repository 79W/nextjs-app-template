import { NextResponse } from "next/server";

export async function GET() {

    const res = await fetch('https://v1.hitokoto.cn')
    const json = await res.json()

    return NextResponse.json({
        code: 0,
        data: json,
        message: '请求成功'
    })
}