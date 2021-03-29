import fetch from 'node-fetch'
export function handleSubmit(event) {
    event.preventDefault()

    let url = document.getElementById('name').value
    let validUrl = Client.isValidUrl(url)
    if (!validUrl) {
        alert("Add Valid URL");
        return;
    }
    console.log("::: Form Submitted :::")

    doRequest(url)
        .then(data => {
            Client.updateUI(data);
        });
}

export async function doRequest(url) {
    console.log(url);
    try {
        const res = await fetch('http://localhost:8081/find-meaning', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url }),
        });
        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error);
        throw error;
    }

}