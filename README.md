# Annual Average PM2.5 Dataset for Birmingham from 2021 to 2025

**Location:** Birmingham, Jefferson County and Shelby County, Alabama  
**Version:** 1.0

## Overview

This interactive dashboard was developed using **QGIS2Web** to visualize **Annual Average PM2.5** across Birmingham and the surrounding areas of Jefferson and Shelby Counties, Alabama, from **2021 to 2025**.

The dashboard provides annual average PM2.5 rasters at 1km resolution, generated using satellite-derived Aerosol Optical Depth (AOD), meteorological variables, and machine learning algorithm.It allows users to explore spatial variation of PM2.5 across the study area and can facilitate research on air pollution exposure. 

Processed raster datasets used in the dashboard are included for download.

## Project Attribution

This dashboard and associated datasets were developed as part of the **B-Open Project**, a research initiative at the School of Engineering, University of Alabama at Birmingham (UAB). The work was developed by the research teams of Dr. Avinash Unnikrishnan and Dr. Moiz Usmani.

## Contents

```
index.html              Main interactive dashboard
layers/                 Spatial layers and web map data used by the dashboard
resources/              Supporting JavaScript libraries and web resources
styles/                 CSS styling files
webfonts/               Font resources used by the dashboard
dataset/                Processed datasets and downloadable data products
documentation/          Detailed methodology, workflow, and dataset documentation
README.md               This file
```

## Opening the Dashboard

Open the file:

```
index.html
```

using a modern web browser such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

If the dashboard does not display correctly due to browser security restrictions, serve the project folder using a local web server (for example, VS Code Live Server).

## Dashboard Layers

The dashboard includes the following datasets:

- Annual Average PM2.5 rasters
- Birmingham Study Area Boundary
- Supporting basemap layers

## Data Sources

The dashboard was prepared using publicly available satellite datasets from:

- **MODIS MAIAC AOD Level 2(MCD19A2)**
- **ERA5, European Centre for Medium-Range Weather Forecasts (ECMWF)**
- **U.S. Environmental Protection Agency (EPA) Air Quality System (AQS)**

Complete source information, metadata, methodology, and supporting documentation are available in the accompanying `documentation/` folder.

## Processed Datasets

The processed datasets include:

- Annual Average PM2.5 raster datasets (2021 - 2025)

Each raster dataset is provided in **GeoTIFF** format.

- PM2.5 rasters contains annual average PM2.5 in µg/m3.

## Data Processing

Satellite-derived AOD, meteorological variables were used as predictor variables and PM2.5 observations were used as the target variable for the Random Forest model.

The Random Forest model was trained using the predictor and target variables to estimate ground-level PM2.5 concentrations.

The trained model was then applied to the AOD and meteorological raster files to generate annual average PM2.5 rasters.



## Documentation

For detailed information regarding:

- Data sources
- Processing methodology
- Raster specifications
- Study area
- Data interpretation
- Dataset limitations

please refer to:

`documentation/` folder

## Notes

This dashboard is intended for visualization and spatial analysis of PM2.5 across the study area. 

The datasets provide annual average PM2.5 concentration at **1 km** resolution.

Cloud contamination and the spatial resolution of the source imagery may influence the representation of localized PM2.5 variations.

Users requiring updated or higher-resolution datasets should consult the original data provider.


## Citation

If you use this dashboard, dataset, or any derived analytical products, please cite the associated research publication:

> Jha, S., Devkota, A., Seth, Y., Jabin, A., Unnikrishnan, A., & Usmani, M. (2026). *B-OPEN: Birmingham Open-access Data Repository*. Under Review: AGU GeoHealth.

Please cite the associated publication when using the datasets or analytical outputs from this project.

## Contact

For questions regarding the dashboard, datasets, methodology, or research project, please contact:

**Dr. Avinash Unnikrishnan**  
Fouad H. Fouad Endowed Professor and Chair  
Department of Civil, Construction, and Environmental Engineering  
The University of Alabama at Birmingham  

- **Website:** [http://avinashu.com/](http://avinashu.com/)
- **Email:** [aunnikri@uab.edu](mailto:aunnikri@uab.edu)
- **Phone:** 205-934-1930
