import { apiBaseUrl } from "./api.js";
    let posts = [];
    let displayedPosts = 5;

    function fetchPosts() {
    showLoading();
    axios
        .get(apiBaseUrl)
        .then((response) => {
        posts = response.data;
        hideLoading();
        displayPosts(posts.slice(0, displayedPosts));
        })
        .catch((error) => {
        hideLoading();
        document.getElementById("error-message").textContent =
            "Error fetching posts";
        console.error("Error:", error);
        });
    }

    function displayPosts(postsToDisplay) {
    const ul = document.getElementById("posts-list");
    ul.innerHTML = "";
    postsToDisplay.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = post.title;
        ul.appendChild(li);
    });
    }

    document.getElementById("show-more").addEventListener("click", () => {
    displayedPosts += 5;
    displayPosts(posts.slice(0, displayedPosts));
    });

    function displaySinglePost(postId) {
    const post = posts.find((p) => p.id === postId);
    if (post) {
        document.getElementById("post-title").textContent = post.title;
        document.getElementById("post-content").textContent = post.body;
    } else {
        document.getElementById("error-message").textContent = "Post not found";
    }
    }

    document.getElementById("create-post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    axios
        .post(apiBaseUrl, { title, content })
        .then((response) => {
        posts.push(response.data);
        displayPosts(posts.slice(0, displayedPosts));
        document.getElementById("success-message").textContent =
            "Post created successfully!";
        e.target.reset();
        })
        .catch((error) => console.error("Error creating post:", error));
    });

    document.getElementById("update-post-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const postId = Number(document.getElementById("post-id").value);
    const title = document.getElementById("update-title").value;
    const content = document.getElementById("update-content").value;

    axios
        .patch(`${apiBaseUrl}/${postId}`, { title, content })
        .then((response) => {
        const postIndex = posts.findIndex((post) => post.id === postId);
        posts[postIndex] = response.data;
        displayPosts(posts.slice(0, displayedPosts));
        document.getElementById("success-message").textContent =
            "Post updated successfully!";
        })
        .catch((error) => console.error("Error updating post:", error));
    });

    document.getElementById("delete-post-button").addEventListener("click", () => {
    const postId = Number(document.getElementById("delete-post-id").value);

    axios
        .delete(`${apiBaseUrl}/${postId}`)
        .then(() => {
        posts = posts.filter((post) => post.id !== postId);
        displayPosts(posts.slice(0, displayedPosts));
        document.getElementById(
            "success-message"
        ).textContent = `Post ${postId} deleted successfully!`;
        })
        .catch((error) => console.error("Error deleting post:", error));
    });

    document.getElementById("search-input").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm)
    );
    displayPosts(filteredPosts.slice(0, displayedPosts));
    });

    document.getElementById("sort-posts").addEventListener("click", () => {
    posts.sort((a, b) => a.title.localeCompare(b.title));
    displayPosts(posts.slice(0, displayedPosts));
    });

    function showLoading() {
    document.getElementById("loading").style.display = "block";
    }

    function hideLoading() {
    document.getElementById("loading").style.display = "none";
    }

    fetchPosts();
