import { posts } from '@/data/posts'
import { NextResponse } from 'next/server'

// this will return specific post based on id
export async function GET(request: Request, { params }: { params: Promise<{ id: number }> }) {
    const { id } = await params

    const post = posts.find((p) => p.id == id)

    if (!post) {
        return NextResponse.json({ error: 'Post Not Found' }, { status: 404 })
    }

    return NextResponse.json(post)
}
