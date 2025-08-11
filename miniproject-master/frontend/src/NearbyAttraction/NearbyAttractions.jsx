import React, { useEffect, useState } from "react";

const NearbyAttractions = ({ lat, lon }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);

  useEffect(() => {
    const fetchNearbyAttractions = async () => {
      const apiKey = "YOUR_OPENTRIPMAP_API_KEY"; // ✅ Replace with your API key

      try {
        // ✅ Fetch nearby places within 5km radius
        const radiusResponse = await fetch(
          `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lon=${lon}&lat=${lat}&limit=10&apikey=${apiKey}`
        );
        const radiusData = await radiusResponse.json();

        if (!radiusData.features) {
          setNearbyPlaces([]);
          return;
        }

        // ✅ Fetch detailed data (images and description)
        const detailedData = await Promise.all(
          radiusData.features.map(async (place) => {
            const xid = place.properties.xid;
            const detailRes = await fetch(
              `https://api.opentripmap.com/0.1/en/places/xid/${xid}?apikey=${apiKey}`
            );
            const detailData = await detailRes.json();

            return {
              name: detailData.name || "Unnamed Place",
              image: detailData.preview
                ? detailData.preview.source
                : "https://via.placeholder.com/300x200.png?text=No+Image",
              desc:
                detailData.wikipedia_extracts?.text ||
                "No description available",
            };
          })
        );

        setNearbyPlaces(detailedData);
      } catch (error) {
        console.error("Error fetching nearby attractions:", error);
      }
    };

    fetchNearbyAttractions();
  }, [lat, lon]);

  return (
    <section className="nearby-attractions">
      <h3>Nearby Attractions (Hidden Gems)</h3>

      <div className="grid-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        {nearbyPlaces.map((place, index) => (
          <div key={index} className="grid-item" style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "10px" }}>
            <img
              src={place.image}
              alt={place.name}
              className="img-fluid rounded"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h5 className="mt-2">{place.name}</h5>
            <p>{place.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyAttractions;
