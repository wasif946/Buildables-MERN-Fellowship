// Simple in-memory cache
const cache = new Map();

export function setCache(key, value) {
  cache.set(key, { value, timestamp: Date.now() });
}

export function getCache(key) {
  return cache.get(key);
}

export function hasCache(key) {
  return cache.has(key);
}
