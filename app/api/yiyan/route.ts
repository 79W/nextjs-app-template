import { NextResponse } from "next/server";

import redis from "@/db/redis";

export async function GET() {
    let yiyan = await redis.get('yiyan');
    if(!yiyan) {
        const res = await fetch('https://v1.hitokoto.cn')
        yiyan = await res.json()
        await redis.setex('yiyan', JSON.stringify(yiyan), 60)
    }else{
        try {
            yiyan = JSON.parse(yiyan)
        } catch (error) {
            await redis.del('yiyan')
            const res = await fetch('https://v1.hitokoto.cn')
            yiyan = await res.json()
        }
    }

    return NextResponse.json({
        code: 0,
        data: yiyan,
        message: '请求成功'
    })
}