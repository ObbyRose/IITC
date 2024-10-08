document.getElementById('dogButton').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dogImage');
            
            dogImage.src = data.message;
            dogImage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the dog image:', error);
        });
});
