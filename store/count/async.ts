import request from '@/request'

import slice from './slice'

async function fetchYiyan() {
    const res = await request.get<{
        hitokoto: string
    }>('/api/yiyan')
    if (!res.code) {
        const hitokoto = res.data?.hitokoto || ''
        await slice.getState().changeYiyan(hitokoto)
    }
    return res
}

export default {
    fetchYiyan
}