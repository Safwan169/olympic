/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Highlighted Countries (for Export)
const highlightedCountries = [
  "FR", "BN", "AU", "ZA", "MV", "GB", "US", "MY", "SG", "QA", "AE",
  "OM", "KW", "SA", "ZM", "SE", "IE", "DE", "SR", "KR", "SY", "SO",
  "NZ", "MM", "IN", "CY", "IT", "GR", "CA", "MU", "KH", "PT", "YE", "ZAF", "ZMB", "ZWE"
];

// ✅ Key Export Cities with Pins (Latitude & Longitude)
const exportCities = [
  { name: "London", country: "GB", coordinates: [-0.1276, 51.5072] },
  { name: "Dubai", country: "AE", coordinates: [55.2708, 25.2048] },
  { name: "Singapore", country: "SG", coordinates: [103.8198, 1.3521] },
  { name: "New York", country: "US", coordinates: [-74.006, 40.7128] },
  { name: "Sydney", country: "AU", coordinates: [151.2093, -33.8688] },
];

export default function Exports() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [mapData, setMapData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/world-countries.json")
      .then((res) => res.json())
      .then((data) => setMapData(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p className="text-red-600 text-center">Error: {error}</p>;
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* 🌍 Interactive World Map */}
        <div className="relative flex justify-center overflow-hidden" data-aos="fade-up">
          <Tooltip id="tooltip" />

          {mapData ? (
            <ComposableMap projectionConfig={{ scale: 130 }} className="w-full">
              <Geographies geography={mapData}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const countryCode = geo.properties.iso_a2 || geo.properties.adm0_a3;
                    const isHighlighted = highlightedCountries.includes(countryCode);

                    return (
                      <Geography
                        key={geo.rsmKey || countryCode}
                        geography={geo}
                        fill={isHighlighted ? "#FF5733" : "#D6D6DA"}
                        stroke="#FFF"
                        className={`transition-all duration-300 ease-in-out ${
                          isHighlighted ? "hover:fill-red-500 animate-pulse" : "hover:fill-gray-400"
                        }`}
                        onMouseEnter={() => {
                          setTooltipContent(
                            `<div class="text-white p-2">
                              <strong>${geo.properties.name}</strong>
                              <br/> ${isHighlighted ? "✔ Exporting" : "❌ Not Exporting"}
                            </div>`
                          );
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        data-tooltip-id="tooltip"
                        data-tooltip-html={tooltipContent}
                      />
                    );
                  })
                }
              </Geographies>

              {/* 📍 Export City Markers */}
              {exportCities.map(({ name, country, coordinates }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={5} fill="#FFD700" stroke="#000" strokeWidth={1.5} />
                  <text
                    textAnchor="middle"
                    y={15}
                    className="text-sm font-bold fill-gray-800"
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          ) : (
            <p className="text-gray-500">Loading Map Data...</p>
          )}
        </div>

        {/* 📝 Text Section */}
        <div className="p-8 text-start space-y-10" data-aos="fade-left">
          <h2 className="text-5xl font-extrabold text-center uppercase tracking-wide bg-gradient-to-r from-red-600 to-yellow-400 text-transparent bg-clip-text shadow-md">
            Global Exports
          </h2>
          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Olympic’s products are trusted worldwide, reaching markets in
            **over 30+ countries.** We ensure quality, safety, and reliability
            in every shipment.
          </p>
          <button className="w-full px-5 py-3 font-medium text-center hover:cursor-pointer text-white bg-gradient-to-r from-red-600 to-yellow-500 border-2 border-red-600 rounded-md shadow-md transition-all duration-300 relative overflow-hidden group hover:from-red-700 hover:to-yellow-600">
            <span className="absolute inset-0 w-full h-full bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"></span>
            <span className="relative z-10 text-lg">Explore More</span>
          </button>
        </div>

      </div>
    </section>
  );
}
