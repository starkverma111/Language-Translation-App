       async function translateWord() {
            const url = 'https://google-translation-unlimited.p.rapidapi.com/translate';
            const apiKey = 'your api key here';
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

        function speakTranslatedText() {
            const translatedText = document.getElementById('translatedWord').textContent;
            if ('speechSynthesis' in window && window.speechSynthesis !== null && translatedText) {
                const utterance = new SpeechSynthesisUtterance(translatedText);
                utterance.onerror = (event) => {
                    console.error('Speech synthesis error:', event.error);
                };
                speechSynthesis.speak(utterance);
            }
        }

        function startSpeechRecognition() {
            const recognition = new webkitSpeechRecognition();
            document.getElementById('loader').style.display = 'block';
            const defaultLanguages = ['en-US', 'hi-IN'];
            recognition.lang = defaultLanguages.includes(document.getElementById('targetLanguage').value)
                ? document.getElementById('targetLanguage').value
                : defaultLanguages[0];
            recognition.onstart = () => {
                console.log('Speech recognition started');
            };
            recognition.onresult = (event) => {
                const result = event.results[0][0].transcript;
                document.getElementById('wordInput').value = result;
                translateWord();
            };
            recognition.onend = () => {
                document.getElementById('loader').style.display = 'none';
                console.log('Speech recognition ended');
            };
            recognition.start();
        }
