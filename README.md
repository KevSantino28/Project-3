# Baseball Stadiums Data Visualization

## Overview

This project utilizes data visualizations to tell a story about baseball stadiums. It includes an interactive map with baseball icons representing different stadiums. The data is stored in CSV files, and visualizations are powered by Python and JavaScript libraries.

This project visualizes the locations of basketball stadiums, categorizing them into Major League Baseball (MLB) and Minor League Baseball (MiLB) stadiums. It uses Leaflet for mapping and D3 for data manipulation.

It includes a Python script for analyzing and visualizing team wins over the years, using linear regression to show trends.

Additionally, the project includes a financial analysis section that explores MLB team payrolls over the years. It uses Python with Pandas, NumPy, Matplotlib, and ipywidgets to analyze and visualize estimated payrolls for selected teams.


## Contents

- [Basketball Stadiums Visualization](#basketball-stadiums-visualization)
  - [Overview](#overview)
  - [Contents](#contents)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Leaflet Map](#leaflet-map)
  - [Linear Regression Analysis](#linear-regression-analysis)
  - [Financial Analysis](#financial-analysis)
  - [Dependencies](#dependencies)
  - [How to Use](#how-to-use)
  - [Contributing](#contributing)
  - [License](#license)
 
## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
*    git clone https://github.com/KevSantino28/Project-3.git
2. Install the required dependencies:
*    pip install -r requirements.txt
3. Open index.html in your browser to view the basketball stadiums map.
  Run the Python script MLB_visuals.ipynb to visualize team wins over the years.
4. Explore team financials by running the Python script MLB_Money.ipynb.
  
## Project Structure

The project is structured as follows:

- static/: Contains static files, including CSS styles and JavaScript code.
- data/: Contains CSV files for MLB and MiLB stadiums.
- MLB_visuals.ipynb: Python script for analyzing and visualizing team wins.
- MLB_Money.ipynb: Python script for analyzing and visualizing team financials.
- README.md: Documentation providing an overview of the project, instructions, and insights.
  
## Leaflet Map

The basketball stadiums are visualized using Leaflet, a JavaScript library for interactive maps. Custom icons are used to represent the locations of MLB and MiLB stadiums.

## Linear Regression Analysis

The Python script MLB_visuals.ipynb analyzes and visualizes team wins over the years using linear regression. It utilizes Pandas, NumPy, Matplotlib, SciPy, and ipywidgets.

<img width="651" alt="Screenshot 2024-02-27 at 7 26 26 AM" src="https://github.com/KevSantino28/Project-3/assets/98873779/23c48c6f-994c-40a7-a5cf-5d33705ed2bc">

## Financial Analysis

The financial analysis section explores MLB team payrolls over the years. It includes a Python script MLB_Money.ipynb that utilizes Pandas, NumPy, Matplotlib, and ipywidgets to analyze and visualize estimated payrolls for selected teams.

<img width="938" alt="Screenshot 2024-02-28 at 6 35 05 AM" src="https://github.com/KevSantino28/Project-3/assets/98873779/a24b0ba4-9555-4271-af1b-387e13212bb0">

## Dependencies

- Leaflet: [https://leafletjs.com/](https://leafletjs.com/)
- D3.js: [https://d3js.org/](https://d3js.org/)
- FontAwesome: [https://fontawesome.com/](https://fontawesome.com/)
- Python Libraries: pandas, numpy, matplotlib, scipy, ipywidgets
- Make sure to install these dependencies using the following command:
*     pip install pandas numpy matplotlib scipy ipywidgets


## How to Use

1. Open index.html in a web browser to view the basketball stadiums map.
2. Make sure all dependencies are installed (pip install pandas numpy matplotlib scipy ipywidgets).
3. Run the Jupyter Notebook to execute the code cells sequentially.
4. Run MLB_visuals.ipynb to perform linear regression analysis on team wins.Select the team names from the dropdown.
5. Run MLB_Money.ipynb to explore MLB team payrolls.

## Group Members
1. Kevin Santino
2. Sishir Peyyeti
3. Navdeep Kaur

## Acknowledgments
Data sourced from
* [Baseball-Refrence.com](https://www.baseball-reference.com/leagues/majors/index.shtml)
* [Sports Stadium Locations](https://www.kaggle.com/datasets/logandonaldson/sports-stadium-locations?resource=download)
Special thanks to the developers of the used libraries.

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your contributions are welcome!

## License

This project is licensed under the MIT License.





