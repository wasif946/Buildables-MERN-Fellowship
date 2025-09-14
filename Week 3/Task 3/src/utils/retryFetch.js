// ✅ src/utils/retryFetch.js
const retryFetch = async (url, options = {}, retries = 3, delay = 300) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      if (attempt === retries) throw error;
      await new Promise((res) => setTimeout(res, delay));
    }
  }
};

export default retryFetch; // ✅ make sure this line exists!
