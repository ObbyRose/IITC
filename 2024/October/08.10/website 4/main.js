document.getElementById('cringeBtn').addEventListener('click', function() {
    fetch('https://api.waifu.pics/sfw/cringe')
        .then(response => response.json())
        .then(data => {
            const cringeImage = document.getElementById('cringe');
            
            cringeImage.src = data.url;
            cringeImage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the dog image:', error);
        });
});
document.getElementById('pokeBtn').addEventListener('click', function() {
    fetch('https://api.waifu.pics/sfw/poke')
        .then(response => response.json())
        .then(data => {
            const pokeImage = document.getElementById('poke');
            
            pokeImage.src = data.url;
            pokeImage.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the dog image:', error);
        });
});
