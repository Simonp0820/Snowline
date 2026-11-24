# Snowline — national market explorer

Version 5 · geography snapshot 18 November 2026 · pricing reviewed 19 November 2026.

Explore official Canadian municipalities and U.S. places and counties, choose two areas with independent left/right dropdowns, compare the available evidence, and test seasonal-contract economics. The directory is geographically broad; it does not certify that every area is a profitable snow-removal market.

## Use

Open `index.html` in a browser or use the privately hosted Snowline website. The two market selectors are independent. Either side can use Canada or the United States, including comparisons within the same country. Neither is a baseline.

On each side, choose a country, then a province/territory/state or type a market name. Select a market in that side's dropdown. The evidence table and seasonal calculator update immediately in left-to-right order. Use **Swap sides** to reverse the entire selection and its search filters; financial inputs stay attached to their market. **Clear** resets just that panel. Panel headings show the selected market name and return to **Choose a market** when cleared.

Each side has its own optional area-type, station-snowfall and household filters. Unknown snowfall can remain included. Changing a country or region clears only that side's market. Search and optional filters keep the current selection while looking for another. A nearby station's snow normal does not describe every property or predict service visits.

The dropdown lists up to 3,000 alphabetical matches; narrower search terms or a region make every directory record discoverable. Duplicate area names include official type/identifier labels. The same market cannot occupy both slots. County and local-place totals overlap and must not be added together.

Fresh comparisons start with both market slots empty. Version-3 selections are not migrated, so no former default city becomes an automatic reference. Validated financial assumptions are retained. Version-5 market selections, independent filters, price modes and calculator inputs are saved in this browser when storage is available; they are not uploaded or shared with other visitors. The calculator reset button restores automatic local pricing and example operating inputs.

## Exact coverage


- Canada: all 5,161 census subdivisions in the 2021 Census, across 10 provinces and 3 territories. This includes municipalities, reserves and municipal equivalents; it is not a list of every neighbourhood or named settlement.
- U.S.: all 32,041 places and 3,144 counties/county equivalents in the 2024 Census Gazetteer for the 50 states and D.C. Puerto Rico and other U.S. territories are excluded. Counties provide a regional way to investigate areas outside named Census places.
- Total: 40,346 geographic records across 64 province/territory/state/D.C. categories.
- Snow: 5,906 official station/composite annual normals with values, all for 1991–2020. A nearest same-country station within 50 km is matched to 37,529 areas. The other 2,817 areas remain unknown, not zero-snow.

Canadian population and occupied dwellings use the 2021 Census. Missing figures remain null. Ownership and income supplement only the five originally researched Canadian cities; no nationwide values are invented. Those income figures generally refer to 2020 CAD, and Saskatoon's source has a distinct, incompletely verified universe noted in the app.

U.S. population, occupied households, ownership and income use 2020–2024 ACS 5-year estimates, aligned to 2024 geography. Income is in 2024 USD. Published 90% margins of error are shown for counts and income where available. Ownership is derived from owner-occupied / occupied counts; its percentage margin of error is not calculated. Open-ended income estimates are labelled “at least” or “at most.”

Canadian points are derived interior points from simplified official CSD boundaries. U.S. points are Census Gazetteer internal points. These are not necessarily population centres. Coordinates are used only to match nearby snowfall stations; there is no home-city distance filter or baseline.

## Snow matching

The closest station with a valid annual snowfall value in the same country and within 50 km is used, regardless of completeness class. This is a disclosed screening rule, not a claim that the station represents the entire area. ECCC normals may combine constituent stations. Large rural boundaries, mountains, elevation and lake effects require local investigation.

Canada has 245 annual snowfall composites: 33 A, 6 B, 112 C and 94 D. U.S. data has 5,661 stations: 771 standard S and 4,890 provisional P. A reference period of 1991–2020 does not imply 30 complete contributing years: some D Canadian records have only 15 years and P U.S. records may have only 10. The UI shows quality and actual contributing years when supplied.

NOAA's X flag means positive snowfall rounded to zero. These 98 records display “Rounded nonzero” and pass the positive-snow filter. U.S. inches are converted using 2.54 cm per inch. Annual snowfall cannot be divided by a service trigger to predict visits.

## Sources

- Statistics Canada table 98-10-0002: https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=9810000201
- Canadian official CSD boundary layer: https://geo.statcan.gc.ca/geo_wa/rest/services/2021/Digital_boundary_files/MapServer/9
- U.S. 2024 Gazetteer: https://www.census.gov/geographies/reference-files/time-series/geo/gazetteer-files.2024.html
- U.S. ACS 2024 table-based summary files: https://www.census.gov/programs-surveys/acs/data/summary-file.2024.html
- Environment and Climate Change Canada normals: https://climate.weather.gc.ca/climate_normals/
- NOAA Climate Normals: https://www.ncei.noaa.gov/products/land-based-station/us-climate-normals

The app links selected metric data files and individual matched station records. `national.js` contains the compact national snapshot, source registry and stations; `markets.js` preserves the original Canadian income/tenure source supplements. Census names are those of their source vintage and can differ from current names.

The six Winnipeg/Fargo provider examples retain their original review date, 2 October 2026. They have not been refreshed or generalized to other markets. They do not measure total competition or market-wide prices.

## Economics

Revenue = customers × seasonal contract price. Labour = customers × visits × elapsed minutes including route travel / 60 × workers × cost per worker-hour. Other variable cost = customers × (visits × supplies/fuel per property + acquisition cost). Operating profit = revenue − labour − other variable costs − fixed seasonal operating costs.

Break-even customers = fixed costs / contribution per customer, rounded up; non-positive contribution has no attainable break-even in this simplified model. Route hours = customers × elapsed minutes / 60 for one locally based crew.

Operating-cost and workload defaults are common examples by currency, not researched local costs or forecasts. Seasonal prices use the automatic evidence or a clearly labelled custom value described below. Include owner time in labour or management costs. Results exclude tax, financing, startup equipment purchases and working capital. Costs may increase when another crew is needed. Shared 12/20/32-visit tests compare workloads without implying local weather predictions.

## Publishing and course work

This is a buildless static website. Publish the contents of `dist` to the root of a GitHub Pages repository, including `national.js`. The downloadable ZIP places the files at its top level. Sites hosting is configured for owner-only access and is separate from public GitHub Pages.

Keep meaningful project history and submit the repository and website links required by the course. Further research includes local prices, competition, entry requirements, academic literature and the evidence behind your final recommendation.

Version 1 compared Winnipeg and Fargo. Version 2 added a ten-city shortlist. Version 3 added national geography and unified 1991–2020 station normals. Version 4 replaces the shared picker with independent left/right selectors, an empty initial comparison, optional per-side filters and a swap control. Winnipeg-based distance filtering and comparison were removed. WebMCP configuration accepts explicit nullable leftMarket/rightMarket IDs and preserves the same positions in the table and calculator. No external libraries, trackers, protected API keys or live forecast requests are used by the website.


## Automatic seasonal pricing (Version 5)

Standard service: **driveway + walkway + steps**. The price automatically looks up the selected census-area ID and currency in `pricing.js`. No province/state, neighbouring city or county estimate is substituted. Current qualifying coverage: Winnipeg (2 published packages), Fargo / West Fargo / Moorhead, Minnesota (one OARA package explicitly covering those routes), and Calgary (one provider serving south Calgary only). Most of the 40,346 directory areas do not yet have pricing evidence.

Multiple providers use an unweighted mean of one eligible seasonal package each, rounded to cents. This is a small, non-random published-package sample, not a citywide market average. A single source is labelled as a single-provider package. Starting rates, unclear step coverage and old-season offers are excluded. Source links, checked dates, included/excluded records, property size, season, trigger, taxes, extras and route limitations appear in the calculator. Season lengths are not prorated. Pricing is a curated snapshot, not live web scraping. Records cease automatic use after 180 days without review.

Current automatic values: Winnipeg CAD 1,149.88 (mean of 999.75 and 1,300); Fargo / West Fargo / Moorhead USD 1,049; Calgary CAD 1,190. OARA does not state tax treatment or exact season dates. Calgary's package covers six months and includes ice melt; Winnipeg examples cover five. These are not standardized transaction-price estimates.

Unsupported markets leave price blank and suppress revenue, profit, break-even and profit bars until **Enter my own price** is used. Costs and route capacity remain visible. Manual prices are labelled as assumptions and stay with the selected market through swaps/reloads. **Automatic local pricing** restores the current source-backed value, or missing status. Reset restores automatic prices and the example operating assumptions.

Storage migrates `snowline-pair-v4` into `snowline-pricing-v5`, retaining selections, filters and operating inputs. Old common example prices (950 CAD / 850 USD) switch to automatic lookup; other valid saved prices remain clearly labelled custom assumptions. Browser storage cannot distinguish a deliberately entered value equal to an old default. No data is uploaded. WebMCP exposes pricing provenance and supports `priceMode: auto/custom`; writing a price selects custom mode. Missing price results remain null.
