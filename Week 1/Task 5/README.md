# Advanced Data Fetching Project

This project is a modern web application built with **Vite**, showcasing robust data fetching with advanced features like **exponential backoff for retries**, a **caching layer** for improved performance, and a **graceful offline experience**.

---

## 🚀 Technologies Used
- **Vite**: A modern build tool for a fast and efficient development environment.  
- **JavaScript**: The core logic for all interactive features, including API calls, caching, and DOM manipulation.  
- **CSS**: Used for all styling, including a responsive, modern UI and a light/dark theme toggle.  
- **HTML**: The structural foundation of the application.  

---

## 🔑 Core Features

### 1. Exponential Backoff for Retries
The application uses an **exponential backoff strategy** to handle transient network failures.  
When a request fails, it retries after a delay that **doubles with each attempt** to avoid overwhelming the server.

**How it works:**
1. The `fetchWithBackoffAndCache` function attempts to fetch data from the API.  
2. If the request fails, the function enters a `catch` block.  
3. It checks if retries are remaining.  
4. If yes → waits for a delay, then retries.  
5. Each delay = `delay * 2`, producing the exponential effect.  

✅ Prevents hammering the server during downtime.  

---

### 2. Simple Caching Layer
To boost performance and provide a **graceful offline experience**, the app implements caching using **localStorage**.

**How it works:**
- Before making a network request, the app checks `localStorage` for cached data.  
- Validity is checked using a **TTL (Time-to-Live)** timestamp.  
- If cached data is valid → use it immediately.  
- After a successful request → save fresh data + new expiration timestamp.  

✅ Ensures data availability even offline.  

---

### 3. Graceful Offline Experience
By combining **exponential backoff** + **caching**, the app ensures smooth usability:

- **First Load (Online):** Fetches data from API + caches it.  
- **Subsequent Loads (Online):** Loads cached data instantly, then updates in background.  
- **Offline State:** Falls back to cached data → no blank screens!  

✅ Users always see content, even without internet.  

---

## 📂 Project Structure
advanced-data-fetching/
├── index.html
├── style.css
├── main.js
├── utils/
│ └── fetchWithBackoffAndCache.js
├── assets/
│ └── icons/
└── README.md

csharp
Copy code

---

## 📜 Example Snippet (Exponential Backoff with Cache)
```js
async function fetchWithBackoffAndCache(url, retries = 3, delay = 1000) {
  const cacheKey = `cache_${url}`;
  const cachedData = JSON.parse(localStorage.getItem(cacheKey));

  if (cachedData && Date.now() < cachedData.expiration) {
    return cachedData.data; // Return valid cache
  }

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    localStorage.setItem(
      cacheKey,
      JSON.stringify({ data, expiration: Date.now() + 5 * 60 * 1000 }) // 5 min TTL
    );

    return data;
  } catch (error) {
    if (retries > 0) {
      await new Promise((res) => setTimeout(res, delay));
      return fetchWithBackoffAndCache(url, retries - 1, delay * 2);
    }
    throw error;
  }
}