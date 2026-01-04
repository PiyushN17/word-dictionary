# English Dictionary – Meanings & Definitions App

**Requirements**
- A modern web browser (Chrome, Firefox, Edge, Safari)  
- Active internet connection to fetch word data  
- Basic understanding of HTML and JavaScript to customize or extend the project  
- No backend or server setup required (fully client-side application)  

**Technologies Used**
- **HTML** for structuring the dictionary search interface and result display  
- **Vanilla JavaScript** for handling user input, API calls, and dynamic UI updates  
- **Fetch API** for retrieving word data asynchronously  
- **Free Dictionary API (dictionaryapi.dev)** as the data source for meanings, phonetics, and audio  

**About the API**
- **Free Dictionary API**
  - Used to fetch meanings, phonetics, parts of speech, examples, and pronunciation audio  
  - Example endpoint:  
    `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
  - Returns:
    - Word and phonetic spelling  
    - Multiple meanings with parts of speech  
    - Definitions and example usages  
    - Pronunciation audio URLs (when available)  

**Features Implemented**
- Search English words to get meanings and definitions  
- Displays word name, phonetics, and parts of speech  
- Shows definitions or example usage for better understanding  
- Audio pronunciation support with a “Listen” button  
- Loading spinner during API requests  
- Graceful error handling for:
  - Empty input  
  - Invalid or unknown words  
  - API errors  
- Responsive layout suitable for desktop and mobile devices  

**Application Flow**
- User enters a word and clicks **Search**  
- Loader appears while data is fetched from the Dictionary API  
- Results are displayed with phonetics, meanings, and definitions  
- If pronunciation audio is available, user can play it  
- Errors are shown clearly without breaking the interface  

**Notes**
- All functionality runs on the client side  
- Some words may not have audio or phonetics available  
- Designed as a learning project to practice API integration and UI state handling  

**Possible Enhancements**
- Add synonym and antonym support  
- Support multiple languages  
- Highlight searched word usage in example sentences  
- Store recent searches using localStorage  
- Improve accessibility and keyboard navigation  
