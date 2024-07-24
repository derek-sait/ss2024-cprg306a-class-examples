"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { dbGetAllPosts } from "./_services/blog-service";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [blogPostList, setBlogPostList] = useState([]);
  useEffect( () => {
	if(user){
		dbGetAllPosts(user.uid, setBlogPostList);
	}
  }, [user] );

  return (
    <main>
      <header>
        <h1 className="text-3xl">Firebase Auth</h1>
      </header>
      {user ? (
        // user IS logged in
        <div>
          <p>Welcome {user.displayName}</p>
          <p>{user.email}</p>
          <img className="w-8 h-8" src={user.photoURL} />
          <p>
            <Link href="/week10/add-blog-post/">Add a new Blog Post</Link>
          </p>
          <button onClick={handleSignOut} className="text-lg m-2 hover:underline">Sign Out</button>
		  <section>
			<h2>My Blog Posts</h2>
			<ul>
				{
					blogPostList.map( (post) => {
						let postUrl = `/week10/${post.id}`;
						return <li key={post.id}><Link href={postUrl}>{post.title}</Link></li>
					} )
				}
			</ul>
		  </section>
        </div>
      ) : (
        // user IS NOT logged in
        <div>
          <button
            onClick={handleSignIn}
            className="text-lg m-2 hover:underline"
          >
            Sign In
          </button>
        </div>
      )}
    </main>
  );
}
