# COVID vaccines time series

A set of scripts for downloading vaccine information from official sources.

Supported countries:

- USA Source: [CDC](https://covid.cdc.gov/covid-data-tracker/#vaccinations)

# Raw data

The downloaded data is stored in `/raw/{country}/{yyyy}-{mm}-{dd}-{country}.{ext}`

# Scripts

Scripts are written using node and puppeteer (some pages are SPA, so it looked better to use a headless browser).

There is one script per country.

# Code License

Copyright (c) 2021 Juan M. Merlos

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Dataset licenses

Please refer to the country official page for info about the data

- [USA](https://covid.cdc.gov/covid-data-tracker/#vaccinations)
