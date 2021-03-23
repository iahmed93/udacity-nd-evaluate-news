function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('name').value
    let validUrl = Client.isValidUrl(url)
    if (!validUrl) {
        alert("Add Valid URL");
        return;
    }
    console.log("::: Form Submitted :::")
    
    fetch('http://localhost:3000/find-meaning', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
    })
        .then(response => response.json())
        .then(data => {
            // document.getElementById('results').innerHTML = res.message
            console.log(data);
            Client.updateUI(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

export { handleSubmit }
