const apiKey = process.env.REACT_APP_OPENTRIPMAP_API_KEY;

export const fetchNearbyAttractions = async (lat, lon) => {
  const radius = 5000; // 5km radius
  const limit = 10;
  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&limit=${limit}&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Nearby Attractions:", data);
    return data.features;
  } catch (error) {
    console.error("Failed to fetch nearby attractions:", error);
    return [];
  }
};
