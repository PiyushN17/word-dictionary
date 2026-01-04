# English Dictionary – Meanings & Definitions App

**Requirements**
- A modern web browser such as Chrome, Firefox, Edge, or Safari  
- A stable internet connection to fetch real-time dictionary data  
- Basic knowledge of HTML and JavaScript to understand, customize, or extend the application  
- No backend, database, or server setup required since the app runs entirely on the client side  

**Technologies Used**
- **HTML** to build the structure of the search input, result container, and audio controls  
- **Vanilla JavaScript** to manage user interactions, API requests, and dynamic rendering of results  
- **Fetch API** for handling asynchronous HTTP requests to the dictionary service  
- **Free Dictionary API (dictionaryapi.dev)** to retrieve meanings, phonetics, parts of speech, examples, and pronunciation audio  

**About the API**
- **Free Dictionary API**
  - This project uses the Free Dictionary API to fetch comprehensive word information  
  - Example endpoint used in the project:  
    `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
  - The API response typically includes:
    - The searched word along with its phonetic representation  
    - Multiple meanings grouped by parts of speech  
    - Definitions and example sentences (when available)  
    - Pronunciation audio URLs to support correct word pronunciation  
  - The API does not require authentication or an API key, making it ideal for learning projects  

**Features Implemented**
- Allows users to search any English word and instantly retrieve its meaning  
- Displays the word title, phonetic transcription, and grammatical category  
- Shows either example usage or definitions to improve contextual understanding  
- Includes an audio playback feature to listen to correct pronunciation  
- Displays a loading spinner while data is being fetched from the API  
- Implements clear and user-friendly error handling for:
  - Empty search input  
  - Invalid or non-existent words  
  - Network or API-related issues  
- Fully responsive layout that adapts well to both desktop and mobile screens  

**Application Flow**
- The user enters a word in the input field and clicks the **Search** button  
- A loading indicator is displayed while the API request is processed  
- Once the data is successfully fetched, the result container is populated with:
  - Word details  
  - Phonetics  
  - Meanings and definitions  
- If pronunciation audio is available, the **Listen** button becomes active  
- Any errors encountered during the process are shown clearly without disrupting the UI  

**Notes**
- All application logic and rendering are handled on the client side  
- Some words may not include phonetics or audio pronunciation depending on API data availability  
- The project is designed primarily as a learning exercise to practice:
  - Asynchronous JavaScript  
  - API integration  
  - Conditional rendering  
  - UI state management  

**Possible Enhancements**
- Add support for synonyms and antonyms  
- Extend functionality to support multiple languages  
- Highlight the searched word within example sentences  
- Store recent or favorite searches using `localStorage`  
- Improve accessibility with better keyboard navigation and screen reader support  
