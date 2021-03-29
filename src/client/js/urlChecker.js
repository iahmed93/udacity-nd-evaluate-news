function isValidUrl(inputText) {
    console.log("::: Running isValidUrl :::", inputText);

    const regex = /((http|https):\/\/)(www.)?[a-zA-Z0-9@:%._\\+~#?&\/\/=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\\+~#?&\/\/=]*)/gi;
    const result = regex.test(inputText);

    console.log(result); // true

    return result;
}

export { isValidUrl }
