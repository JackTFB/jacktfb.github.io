// Fetch the blog posts from JSON
fetch('assets/posts.json')
    .then(response => response.json())
    .then(posts => {
        const blogList = document.getElementById('blog-list');

        // Loop through the posts and create HTML for each
        posts.forEach(post => {
            const article = document.createElement('article');
            article.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.date}</p>
                <p>${post.summary}</p>
                <button onclick="showPost('${post.title}')">Read More</button>
            `;
            blogList.appendChild(article);
        });
    });

// Function to show the full blog post
function showPost(title) {
    fetch('assets/posts.json')
        .then(response => response.json())
        .then(posts => {
            const post = posts.find(p => p.title === title);
            if (post) {
                document.body.innerHTML = `
                    <header>
                        <h1>${post.title}</h1>
                        <p>${post.date}</p>
                    </header>
                    <main>
                        ${post.content}
                    </main>
                    <footer>
                        <button onclick="window.location.reload()">Back to Blog</button>
                    </footer>
                `;
            }
        });
}
