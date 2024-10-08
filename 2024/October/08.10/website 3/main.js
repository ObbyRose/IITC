document.getElementById('dogButton').addEventListener('click', function() {
    fetch('http://dog-api.kinduff.com/api/facts')
        .then(response => response.json())
        .then(data => {
            const dogFact = document.getElementById('dogFact');
            
            dogFact.src = data.message;
            dogFact.style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching the dog fact:', error);
        });
});
