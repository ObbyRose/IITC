document.getElementById('dogButton').addEventListener('click', function() {
    fetch('http://dog-api.kinduff.com/api/facts')
        .then(response => response.json())
        .then(data => {
            const dogFact = document.getElementById('dogFact');
            
            dogFact.src = data.facts;
            dogFact.style.display = 'block';
            dogFact.style.textSize = '12px';
        })
        .catch(error => {
            console.error('Error fetching the dog fact:', error);
        });
});
