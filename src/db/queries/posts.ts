import type { Post } from "@prisma/client";
import { db } from "@/db";


/*export type PostWithData = (
    Post &{
        topic:{ slug:string };
        user:{name: string | null};
        _count:{comments: number}
    }
)*/ 
//  OR...

export type PostWithData = Awaited<
ReturnType<typeof fetchPostsbyTopicSlug>
>[number];

export function fetchPostsbyTopicSlug(slug:string){
    return db.post.findMany({
        where: { topic: { slug: slug }},
        include:{
            topic: { select: { slug: true }},
            user: { select: { name: true }},
            _count: { select: { comments: true }}
        }
    })

}
