const DIV = document.getElementsByClassName("posts")[0];

async function getPosts<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

interface IPost {
      userId: number;
      id: number;
      title: string;
      body: string;
  }

  const posts = getPosts<IPost[]>("https://jsonplaceholder.typicode.com/posts")
    .then(posts => posts.forEach(post => {
      DIV.innerHTML = DIV.innerHTML + 
      `<div class="post">
        <div class="post__id">
          <p class="post__user-id">User ID: #${post.userId}</p>
          <p class="post__id-number">Post #${post.id}</p>
        </div>
        <p class="post__title">${post.title}</p>
        <p class="post__body">${post.body}</p>
      </div>`
      })
    );