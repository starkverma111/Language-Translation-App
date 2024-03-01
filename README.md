# Language-Translation-App Using JavaScript

> JavaScript / Project 4

I have created a wonderful project called "Language-Translation-App Using JavaScript."
This project allows users to easily translate their language into various other languages. Users have the option to speak for translation or listen to different voices with just a single click.

#### https://starkverma111.github.io/Language-Translation-App/

` `

## Instructions How to Use this application.

> **Just a reminder:** for security purposes, the app cannot be accessed via the link alone as I have removed the API from my project.



### Instructions How to Use this application.

I utilize the Google Translation Unlimited API from rapidapi.com.

1. Get this project downloaded.
2. Extract the files.
3. Locate the app.js file in the JavaScript folder.
4. Open the app.js file using a text editor.
5. Replace your Api key and save the file.
6. Finally, run it in your browser.

------------


```javascript
 async function translateWord() {
            const url = 'https://google-translation-unlimited.p.rapidapi.com/translate';
            const apiKey = ' your api key put here ';
            const wordInput = document.getElementById('wordInput').value;
            const targetLanguage = document.getElementById('targetLanguage').value;
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': apiKey,
                    'X-RapidAPI-Host': 'google-translation-unlimited.p.rapidapi.com'
                },
                body: new URLSearchParams({
                    texte: wordInput,
                    to_lang: targetLanguage
                })
            };
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                if (result.translation_data) {
                    const { translation } = result.translation_data;
                    document.getElementById('translatedWord').textContent = `${translation}`;
                } else {
                    document.getElementById('translatedWord').textContent = 'No translation data found.';
                }
            } catch (error) {
                console.error('Error fetching translation:', error);
            }
        }
```
` Html | Bootstrap 5 | Javascript `

I create many other projects. Please explore them as well. All the source code for my projects is freely available for you to download and use as you please. Wishing you good luck and happy learning.

` `
