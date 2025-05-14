# 🌦️ Weather Information App

A simple and modern web application that fetches and displays current weather information for a user-entered city using the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🚀 Technologies Used

- **HTML** – Structure of the web page  
- **CSS** – Styling the web page with a clean and modern look  
- **JavaScript** – Interacting with the OpenWeatherMap API and dynamically updating the UI  
- **OpenWeatherMap API** – Source of weather data  
- **Font Awesome** *(optional)* – For weather icons and UI enhancements

---

## 🛠️ Getting Started

1. Save the following files in the same project folder:
   - `weather_report.html`
   - `style.css`
   - `weather_report.js`

2. Open the `weather_report.html` file in a web browser.

3. Enter a **city name** in the search input field and click the **search icon** (or press **Enter**).

4. The current weather details for the specified city will be displayed.

---

## 🔍 Features

- 🔄 Fetches **real-time weather** data based on user input  
- 🌍 Displays **city name and country**  
- 🌡️ Shows **current temperature** in Celsius  
- 📉📈 Displays **minimum and maximum temperatures**  
- ☁️ Provides **weather condition description** (e.g., cloudy, rainy)  
- 💧 Shows **humidity** percentage  
- 💨 Displays **wind speed** in meters per second  
- 🖼️ Shows **weather condition icon** *(if available)*  
- ❌ Displays an **error message** if an invalid city name is entered  

---

## 🔐 API Key Setup

This app requires an **OpenWeatherMap API key**.

1. Sign up at [openweathermap.org](https://openweathermap.org/) to get your free API key.

2. Open `weather_report.js` and replace the placeholder string with your actual API key:

```javascript
const apiKey = 'YOUR_API_KEY';


👨‍💻 Author

[Your Name]
📧 youremail@example.com
🌐 [YourWebsite.com] (optional)
