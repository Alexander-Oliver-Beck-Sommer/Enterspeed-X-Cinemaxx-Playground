// lib/enterspeed.js

const ENTERSPEED_URL = "https://delivery.enterspeed.com/v2";

export const fetchDataFromEnterspeed = async (handle) => {
  const response = await fetch(`${ENTERSPEED_URL}?handle=${handle}`, {
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_ENTERSPEED_API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch data from Enterspeed: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
};
