# Dipole Code Challenge

## Goal

Build a small REST API that answers questions about sensor data collected in a single month.

## Background

Below we share a dataset in CSV format that provides metrics recorded by a sensor over a full month (2015-08). 

These are the parameters we care for this challenge:

- `time`: The datetime when the metric was recorded
- `temp`: The temperature recorded by the sensor
- `CO2`: The CO2 concentration recorded by the sensor
- `humidity`: The humidity recorded by the sensor

Based on that, we want to answer some questions by querying an API instead of doing manual exploration of the data.

You are free to design the endpoints the way you feel they should be.

## Questions the API should be able to answer

- What was the highest CO2 level detected in the whole dataset and at what date/time?
- In average, what was the day with the highest temperature recorded?
- In average, what was the hour with the highest humidity recorded?

## Rules

- You must use either JavaScript or TypeScript
- You can use any library or web framework
- We would like to be able to install and run this API in less than 5min


## Bonus (optional)

- Use Docker Compose
- Use a Time Series Database for storing/querying the data (timescale, influxdb, prometheus, etc)

## Notes

We are aware that some of the requirements are a bit open. That helps us understand the way you approach problems with incomplete requirements and how proactive (or careful) you are in these situations. 

You can send the public repository link to `eduardo@dipole.digital`

# Thank you for your time.