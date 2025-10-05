# 📘 IOT-perusteet
## 🔧 Technologies Used

- **JavaScript (Frontend)**: Fetches and visualizes temperature data from ThingSpeak.
- **Node.js (Backend)**: Implements a WebSocket server for real-time communication.
- **ThingSpeak**: Cloud platform used to store and retrieve sensor data.
- **Google Charts**: Used to render a line chart of temperature over time.
- **HTML/CSS**: Basic structure and styling of the web interface.

---

## 🔄 Pipeline Overview

The project follows a basic IoT data pipeline:

1. **Sensor Measurement**: A temperature sensor sends readings to a ThingSpeak channel.
2. **Data Storage**: ThingSpeak stores the data and provides a public API for access.
3. **Backend Communication**: A Node.js WebSocket server enables real-time messaging between client and server.
4. **Frontend Visualization**:
   - JavaScript fetches temperature data from ThingSpeak.
   - Google Charts renders a line chart showing temperature trends over time.

This pipeline demonstrates how sensor data can be collected, transmitted, and visualized in a web application.

---

## 📁 Files Included

- `server.js`: Node.js WebSocket server implementation.
- `index.html`: Frontend interface with input field, WebSocket client, and chart container.
- `chart.js`: JavaScript logic for fetching ThingSpeak data and rendering the chart.
- `README.md`: Documentation of the project.
