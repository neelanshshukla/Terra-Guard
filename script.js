document.addEventListener("DOMContentLoaded", function () {

    console.log("JavaScript loaded");

    // Create map
    const map = L.map("mapcontainer").setView([25.8, 93.0], 6);

    // OpenStreetMap
    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution: "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    // Demo landslide-risk points
    const riskData = [

        // Arunachal Pradesh
        [28.2180, 94.7278, 1.0],
        [27.5861, 91.8782, 0.85],
        [28.0656, 95.3268, 0.90],
        [27.4917, 94.9120, 0.75],

        // Assam
        [26.1445, 91.7362, 0.55],
        [27.4728, 94.9119, 0.65],
        [26.7570, 94.2037, 0.50],

        // Sikkim
        [27.3389, 88.6065, 0.95],
        [27.5330, 88.6137, 0.88],
        [27.3300, 88.7620, 0.78],

        // Meghalaya
        [25.5788, 91.8933, 0.85],
        [25.3000, 91.6500, 0.70],

        // Nagaland
        [25.6751, 94.1086, 0.80],
        [25.9000, 94.2500, 0.72],

        // Manipur
        [24.8170, 93.9368, 0.70],

        // Mizoram
        [23.7271, 92.7176, 0.82],
        [23.8500, 92.7500, 0.75],

        // Tripura
        [23.8315, 91.2868, 0.45]
    ];

    // Create heatmap
    L.heatLayer(riskData, {
        radius: 45,
        blur: 35,
        maxZoom: 8,
        minOpacity: 0.35,

        gradient: {
            0.00: "#00aaff",
            0.25: "#00ff88",
            0.45: "#ffff00",
            0.65: "#ff9900",
            0.80: "#ff4500",
            1.00: "#b30000"
        }

    }).addTo(map);

    // Demo marker
    L.marker([27.3389, 88.6065])
        .addTo(map)
        .bindPopup(
            "<b>High Risk Zone</b><br>" +
            "Sikkim<br>" +
            "AI Risk Probability: 95%"
        );

    console.log("Map initialized successfully");
});