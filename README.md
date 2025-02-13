# 2025_New

---

# VR Training & Equipment Monitoring Dashboard

## Overview

This project consists of two major parts:
1. **VR Training Simulation**: An interactive training module to guide users through various safety procedures.
2. **Sensor and Equipment Monitoring Dashboard**: A real-time monitoring system for environmental and equipment health data, displayed through a dashboard with alerts for equipment failure risks.

## Features

### VR Training Simulation
The VR training simulation consists of several steps, guiding users through identifying hazards, checking safety equipment, responding to emergencies, and handling equipment. Each step offers a description of the task and asks the user to proceed through various training stages, with feedback given at the end of the simulation.

#### Features:
- **Interactive Steps**: The training proceeds through multiple steps, such as "Identifying Hazards", "Safety Equipment Check", etc.
- **Feedback**: After completing the training, users are provided with feedback to confirm their successful completion of the module.

### Sensor and Equipment Monitoring Dashboard
This dashboard displays real-time data from various sensors, including environmental conditions (temperature, gas level, vibration) and equipment health metrics (motor temperature, vibration level, pressure). The system fetches data from a server endpoint and displays it periodically on the dashboard.

#### Features:
- **Real-time Data**: Displays live environmental and equipment sensor data such as temperature, gas levels, motor temperature, and vibration levels.
- **Failure Alert**: A failure risk is highlighted if any sensor readings are out of range, triggering an equipment alert message.
- **Data Refresh**: The data is updated every 5 seconds to ensure it is always current.
  
### Predictive Analytics Charts
The dashboard also includes charts showing historical trends in various data points such as temperature, gas level, motor temperature, and pressure, using the **Chart.js** library to visualize trends over the past 10 days.

#### Features:
- **Line Charts**: Displays data trends using line charts for temperature, gas level, vibration, motor temperature, and pressure.
- **Randomized Data for Simulation**: The charts are populated with simulated data, with each chart displaying trends for 10 days.

---

## Tech Stack

- **Backend**: Python with Flask
- **Frontend**: HTML, CSS, JavaScript (using Chart.js for data visualization)
- **Libraries**:
  - Flask: Web framework to serve the backend and render templates.
  - Chart.js: JavaScript library for creating interactive charts.
  - HTML5 Video: Used to display a background video for the dashboard.
  
---

## Getting Started

### Prerequisites

To run this application locally, make sure you have the following installed:
- Python 3.x
- Flask (`pip install flask`)
- A browser for viewing the application

### Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask application:
   ```bash
   python app.py
   ```

4. Open your browser and go to:
   ```
   http://127.0.0.1:5000/
   ```

### File Structure

- **templates/**: Contains the HTML templates for rendering pages.
  - **base.html**: The base layout with the header, footer, and linked stylesheets and scripts.
  - **dashboard.html**: The main page displaying the sensor data, predictive analytics charts, and video background.
  - **training_simulation.html**: The page for the VR training simulation, with interactive training steps.
  
- **static/**: Contains static files like CSS, JavaScript, images, and video files.
  - **css/**: Stylesheets for customizing the page layout and design.
  - **js/**: JavaScript files for controlling dynamic behavior (e.g., data fetching, training simulation).
  - **videos/**: Contains video files used in the background of the dashboard.

- **app.py**: The main Flask application script where routes are defined and data is fetched for the dashboard.

---

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Conclusion

This system provides a comprehensive training and monitoring solution for workplace safety, sensor data tracking, and equipment health. It includes real-time data fetching, interactive training modules, and predictive analytics to ensure the safety and proper functioning of equipment.

s