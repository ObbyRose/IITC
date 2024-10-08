document.getElementById('catButton').addEventListener('click', function() {
    // Use fetch but load the image directly to avoid CORS issues
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            const catImage = document.getElementById('catImage');
            
            // Directly set the image URL without needing to deal with CORS headers
            catImage.src = data[0].url;
            catImage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the cat image:', error);
        });
});
