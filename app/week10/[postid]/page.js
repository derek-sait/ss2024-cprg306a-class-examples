"use client"

import { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { dbGetPost } from "../_services/blog-service";


export default function BlogPostPage({params}){

    const {user} = useUserAuth();
    const [blogPost, setBlogPost] = useState({});
    useEffect( () => {
        if (user) {
            dbGetPost(user.uid, params.postid, setBlogPost);
        }
    }, [user] );

    return(
        <main>
            <header>
                <h1>{blogPost.title}</h1>
            </header>
            <article>{blogPost.contents}</article>
        </main>
    );
}