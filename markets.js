/* Historical city evidence. Values are not forecasts or customer counts. */
window.SNOW_MARKETS = [
  {
    "id": "winnipeg",
    "name": "Winnipeg",
    "region": "Manitoba",
    "country": "CA",
    "currency": "CAD",
    "population": {
      "value": 749607,
      "period": "2021 Census",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?geocode=A00052473005&pid=9810000301&request_locale=en"
    },
    "households": {
      "value": 300431,
      "period": "2021 Census · occupied private dwellings",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?geocode=A00052473005&pid=9810000301&request_locale=en"
    },
    "ownership": {
      "value": 63.1,
      "period": "2021 Census",
      "url": "https://legacy.winnipeg.ca/Census/2021/City%20of%20Winnipeg/City%20of%20Winnipeg/City%20of%20Winnipeg.pdf",
      "note": "Reported tenure share, using rounded census household counts; not share of residents."
    },
    "income": {
      "value": 80000,
      "period": "2020 household income · CAD",
      "url": "https://legacy.winnipeg.ca/Census/2021/City%20of%20Winnipeg/City%20of%20Winnipeg/City%20of%20Winnipeg.pdf"
    },
    "snow": {
      "value": 113.7,
      "period": "1981–2010",
      "url": "https://climate.weather.gc.ca/climate_normals/results_1981_2010_e.html?climate_id=5023222&dispBack=0&lstProvince=MB&searchType=stnProv&txtCentralLatMin=0&txtCentralLatSec=0&txtCentralLongMin=0&txtCentralLongSec=0",
      "station": "WINNIPEG RICHARDSON INT'L A",
      "normalCode": "A"
    },
    "opportunity": "Use your actual Winnipeg operating results as a benchmark. The substantial household base supports research into additional neighbourhoods and concentrated routes.",
    "risk": "City totals can hide poor route economics. Validate route concentration and actual event costs before treating another neighbourhood as profitable.",
    "shortReason": "A familiar operating baseline with a substantial homeowner market.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "saskatoon",
    "name": "Saskatoon",
    "region": "Saskatchewan",
    "country": "CA",
    "currency": "CAD",
    "population": {
      "value": 266141,
      "period": "2021 Census",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?geocode=A00052473005&pid=9810000301&request_locale=en"
    },
    "households": {
      "value": 107052,
      "period": "2021 Census · occupied private dwellings",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?geocode=A00052473005&pid=9810000301&request_locale=en"
    },
    "ownership": {
      "value": 65,
      "period": "2021 Census",
      "url": "https://www.saskatoon.ca/sites/default/files/documents/community-services/planning-development/research/neighbourhood-profiles/City%20of%20Saskatoon.pdf",
      "note": "Reported to whole percent in City of Saskatoon city profile, Housing by Tenure, source 2021 Census; independently repeated in City housing-needs report as 65% of Saskatoon households owning their homes. Not derived from HART subset."
    },
    "income": {
      "value": 85000,
      "period": "2020 household income · CAD",
      "url": "https://www.saskatoon.ca/sites/default/files/documents/community-services/planning-development/Housing%20Needs%20Assessment%202024.pdf",
      "note": "Official city/HART report figure; its household universe is not confirmed equivalent to the other Census income measures."
    },
    "snow": {
      "value": 91.3,
      "period": "1981–2010",
      "url": "https://climate.weather.gc.ca/climate_normals/results_1981_2010_e.html?climate_id=4057120&dispBack=0&lstProvince=&searchType=stnProv&txtCentralLatMin=0&txtCentralLatSec=0&txtCentralLongMin=0&txtCentralLongSec=0",
      "station": "SASKATOON DIEFENBAKER INT'L A",
      "normalCode": "A"
    },
    "opportunity": "A smaller Prairie comparison market for testing whether the Winnipeg operating model transfers. More than 100,000 occupied dwellings provide a meaningful pool for neighbourhood research.",
    "risk": "Lower historical annual snowfall than the other Canadian candidates does not automatically mean lower operating cost or strong contract demand. Seasonal willingness to pay and service-event frequency need local evidence.",
    "shortReason": "A smaller Prairie market with a higher reported ownership share.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "edmonton",
    "name": "Edmonton",
    "region": "Alberta",
    "country": "CA",
    "currency": "CAD",
    "population": {
      "value": 1010899,
      "period": "2021 Census",
      "url": "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?DGUIDlist=2021A00054806016%2C2021A00054811061&GENDERlist=1&HEADERlist=0&Lang=E&STATISTIClist=1&SearchText=edmonton"
    },
    "households": {
      "value": 396404,
      "period": "2021 Census · occupied private dwellings",
      "url": "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?DGUIDlist=2021A00054806016%2C2021A00054811061&GENDERlist=1&HEADERlist=0&Lang=E&STATISTIClist=1&SearchText=edmonton"
    },
    "ownership": {
      "value": 63.6,
      "period": "2021 Census",
      "url": "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?DGUIDlist=2021A00054806016%2C2021A00054811061&GENDERlist=1&HEADERlist=0&Lang=E&STATISTIClist=1&SearchText=edmonton",
      "note": "Calculated as 252,150 owner households / 396,400 total private households by tenure × 100, rounded to one decimal. Both are Edmonton city 2021 Census 25% sample estimates, independently rounded by Statistics Canada. Denominator deliberately differs from the exact occupied-dwelling count."
    },
    "income": {
      "value": 90000,
      "period": "2020 household income · CAD",
      "url": "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?DGUIDlist=2021A00054806016%2C2021A00054811061&GENDERlist=1&HEADERlist=0&Lang=E&STATISTIClist=1&SearchText=edmonton"
    },
    "snow": {
      "value": 118.1,
      "period": "1981–2010",
      "url": "https://climate.weather.gc.ca/climate_normals/results_1981_2010_e.html?climate_id=3012205&dispBack=0&lstProvince=&searchType=stnProv&txtCentralLatMin=0&txtCentralLatSec=0&txtCentralLongMin=0&txtCentralLongSec=0",
      "note": "Airport lies outside Edmonton city boundaries; use as regional climate proxy, not a city-wide observation.",
      "station": "EDMONTON INT'L A",
      "normalCode": "A"
    },
    "opportunity": "A large household base and higher 2020 median household income than Winnipeg justify investigating specific residential neighbourhoods.",
    "risk": "The size of the city does not establish accessible demand. Route concentration, staffing, equipment costs and competitor contract terms remain unverified.",
    "shortReason": "Large household base; investigate concentrated residential routes.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "ottawa",
    "name": "Ottawa",
    "region": "Ontario",
    "country": "CA",
    "currency": "CAD",
    "population": {
      "value": 1017449,
      "period": "2021 Census",
      "url": "https://ottawa.ca/en/living-ottawa/statistics-and-demographics/2021-census/population-and-dwelling-counts"
    },
    "households": {
      "value": 407252,
      "period": "2021 Census · occupied private dwellings",
      "url": "https://ottawa.ca/en/living-ottawa/statistics-and-demographics/2021-census/population-and-dwelling-counts"
    },
    "ownership": {
      "value": 63.9,
      "period": "2021 Census",
      "url": "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?DGUIDlist=2021A00053506008%2C2021S051235061300&GENDERlist=1%2C2%2C3&HEADERlist=0&Lang=E&STATISTIClist=1&SearchText=ottawa",
      "note": "Calculated as 260,220 owner households / 407,250 total private households by tenure × 100, rounded to one decimal. Both are Ottawa city 2021 Census 25% sample estimates, independently rounded by Statistics Canada. Denominator deliberately differs from the exact occupied-dwelling count."
    },
    "income": {
      "value": 102000,
      "period": "2020 household income · CAD",
      "url": "https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/details/page.cfm?DGUIDlist=2021A00053506008%2C2021A0011K2J%2C2021S051235060419&GENDERlist=1&HEADERlist=9&Lang=E&STATISTIClist=1&SearchText=K2J"
    },
    "snow": {
      "value": 223.5,
      "period": "1981–2010",
      "url": "https://climate.weather.gc.ca/climate_normals/results_1981_2010_e.html?climate_id=6106000&dispBack=0&lstProvince=&searchType=stnProv&txtCentralLatMin=0&txtCentralLatSec=0&txtCentralLongMin=0&txtCentralLongSec=0&wbdisable=true",
      "station": "OTTAWA MACDONALD-CARTIER INT'L A",
      "normalCode": "A"
    },
    "opportunity": "The largest occupied-dwelling base and highest 2020 median household income of these five Canadian cities, combined with substantial historical snowfall, make Ottawa a useful candidate for local demand testing.",
    "risk": "Higher snowfall can raise fulfilment costs under fixed seasonal contracts. Stress-test heavy winters and gather local quotations before interpreting demand potential as profit.",
    "shortReason": "Large household base and substantial historical snow exposure.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "quebec-city",
    "name": "Québec City",
    "region": "Quebec",
    "country": "CA",
    "currency": "CAD",
    "population": {
      "value": 549459,
      "period": "2021 Census",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?geocode=A00052473005&pid=9810000301&request_locale=en"
    },
    "households": {
      "value": 265711,
      "period": "2021 Census · occupied private dwellings",
      "url": "https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?geocode=A00052473005&pid=9810000301&request_locale=en"
    },
    "ownership": {
      "value": 51,
      "period": "2021 Census",
      "url": "https://www.ville.quebec.qc.ca/apropos/planification-orientations/immigration/docs/diagnostic-immigration-rapport-2024.pdf",
      "note": "City report rounds share to whole percent; city column shows 136,115 owner households and 129,565 renter households."
    },
    "income": {
      "value": 70500,
      "period": "2020 household income · CAD",
      "url": "https://www.ville.quebec.qc.ca/apropos/planification-orientations/immigration/docs/diagnostic-immigration-rapport-2024.pdf"
    },
    "snow": {
      "value": 303.4,
      "period": "1981–2010",
      "url": "https://climate.weather.gc.ca/climate_normals/results_1981_2010_e.html?climate_id=7016294&dispBack=0&lstProvince=&searchType=stnProv&txtCentralLatMin=0&txtCentralLatSec=0&txtCentralLongMin=0&txtCentralLongSec=0",
      "note": "Annual snowfall normal is code D: limited-data normal. Do not imply 30 complete years of snowfall records or equivalent confidence to the other four Canadian stations.",
      "station": "QUEBEC/JEAN LESAGE INTL A",
      "normalCode": "D"
    },
    "opportunity": "The highest historical snowfall normal of these Canadian candidates makes recurring snow service worth researching. The homeownership share helps illustrate why total population alone overstates a residential homeowner market.",
    "risk": "Heavy-season workload and snow storage can strain a fixed-price contract. The limited-data snowfall normal and unverified local prices add uncertainty.",
    "shortReason": "High reported snow exposure; account for heavy-season workload.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "fargo",
    "name": "Fargo",
    "region": "North Dakota",
    "country": "US",
    "currency": "USD",
    "population": {
      "value": 136275,
      "period": "July 1, 2025 estimate (V2025)",
      "url": "https://www.census.gov/quickfacts/fargocitynorthdakota"
    },
    "households": {
      "value": 59970,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/fargocitynorthdakota"
    },
    "ownership": {
      "value": 43.7,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/fargocitynorthdakota"
    },
    "income": {
      "value": 66998,
      "period": "2020–2024, in 2024 USD",
      "url": "https://www.census.gov/quickfacts/fargocitynorthdakota"
    },
    "snow": {
      "value": 130.556,
      "period": "1991–2020",
      "url": "https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&format=pdf&stations=USW00014914&units=standard",
      "station": "Fargo Hector International Airport (USW00014914)",
      "originalInches": 51.4
    },
    "opportunity": "A smaller market with population growth and an established winter snowfall baseline; useful for investigating a focused initial route.",
    "risk": "A smaller household base and 43.7% owner occupancy make neighbourhood selection important. Population growth alone does not establish customers or profitable pricing.",
    "shortReason": "A smaller U.S. market for researching a focused first route.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "minneapolis",
    "name": "Minneapolis",
    "region": "Minnesota",
    "country": "US",
    "currency": "USD",
    "population": {
      "value": 430324,
      "period": "July 1, 2025 estimate (V2025)",
      "url": "https://www.census.gov/quickfacts/minneapoliscityminnesota"
    },
    "households": {
      "value": 192734,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/minneapoliscityminnesota"
    },
    "ownership": {
      "value": 47.7,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/minneapoliscityminnesota"
    },
    "income": {
      "value": 80846,
      "period": "2020–2024, in 2024 USD",
      "url": "https://www.census.gov/quickfacts/minneapoliscityminnesota"
    },
    "snow": {
      "value": 130.048,
      "period": "1991–2020",
      "url": "https://www.ncei.noaa.gov/access/services/data/v1?dataset=normals-monthly-1991-2020&format=pdf&stations=USW00014922",
      "station": "Minneapolis/St Paul Airport (USW00014922)",
      "originalInches": 51.2
    },
    "opportunity": "The largest household base and highest median household income among these five U.S. case studies make selected residential neighbourhoods worth investigating.",
    "risk": "Citywide owner occupancy is below half. Identify suitable properties and validate competition, route density and customer-acquisition costs before inferring an opportunity.",
    "shortReason": "The largest household base in this five-city U.S. sample.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "madison",
    "name": "Madison",
    "region": "Wisconsin",
    "country": "US",
    "currency": "USD",
    "population": {
      "value": 286233,
      "period": "July 1, 2025 estimate (V2025)",
      "url": "https://www.census.gov/quickfacts/madisoncitywisconsin"
    },
    "households": {
      "value": 128261,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/madisoncitywisconsin"
    },
    "ownership": {
      "value": 46.0,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/madisoncitywisconsin"
    },
    "income": {
      "value": 78050,
      "period": "2020–2024, in 2024 USD",
      "url": "https://www.census.gov/quickfacts/madisoncitywisconsin"
    },
    "snow": {
      "value": 131.572,
      "period": "1991–2020",
      "url": "https://climatology.nelson.wisc.edu/first-order-station-climate-data/madison-climate/",
      "station": "Dane County Regional Airport, Madison",
      "originalInches": 51.8
    },
    "opportunity": "A sizeable household base, median household income near Minneapolis and a regular snowfall climate support research into a residential service offering.",
    "risk": "Fewer than half of households are owner occupied. Avoid treating all households as eligible driveway customers; validate local prices and labour costs.",
    "shortReason": "A sizeable household base with established winter snowfall.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "grand-rapids",
    "name": "Grand Rapids",
    "region": "Michigan",
    "country": "US",
    "currency": "USD",
    "population": {
      "value": 201183,
      "period": "July 1, 2025 estimate (V2025)",
      "url": "https://www.census.gov/quickfacts/grandrapidscitymichigan"
    },
    "households": {
      "value": 80222,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/grandrapidscitymichigan"
    },
    "ownership": {
      "value": 54.0,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/grandrapidscitymichigan"
    },
    "income": {
      "value": 69108,
      "period": "2020–2024, in 2024 USD",
      "url": "https://www.census.gov/quickfacts/grandrapidscitymichigan"
    },
    "snow": {
      "value": 197.104,
      "period": "1991–2020",
      "url": "https://www.weather.gov/media/grr/climate/normals/GrandRapidsNormals1991to2020.pdf",
      "station": "Grand Rapids official climate station (KGRR)",
      "originalInches": 77.6
    },
    "opportunity": "The highest owner-occupied share in this five-city U.S. sample, with a higher snowfall normal, makes homeowner-focused routes a useful research direction.",
    "risk": "Additional snow can raise seasonal-contract service costs. Test workload, equipment capacity and contract terms instead of assuming more snow means more profit.",
    "shortReason": "Higher ownership share and more snow in this U.S. sample.",
    "reviewed": "2026-11-18"
  },
  {
    "id": "buffalo",
    "name": "Buffalo",
    "region": "New York",
    "country": "US",
    "currency": "USD",
    "population": {
      "value": 274613,
      "period": "July 1, 2025 estimate (V2025)",
      "url": "https://www.census.gov/quickfacts/buffalocitynewyork"
    },
    "households": {
      "value": 119630,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/buffalocitynewyork"
    },
    "ownership": {
      "value": 43.0,
      "period": "2020–2024",
      "url": "https://www.census.gov/quickfacts/buffalocitynewyork"
    },
    "income": {
      "value": 50041,
      "period": "2020–2024, in 2024 USD",
      "url": "https://www.census.gov/quickfacts/buffalocitynewyork"
    },
    "snow": {
      "value": 242.316,
      "period": "1991–2020",
      "url": "https://www.weather.gov/buf/newnormals",
      "station": "Buffalo official climate station (USW00014733)",
      "originalInches": 95.4
    },
    "opportunity": "The highest snowfall normal in this U.S. sample and a substantial household base make the need for clearing worth investigating.",
    "risk": "The sample's lowest median household income and high snowfall workload make willingness to pay and seasonal-contract cost control especially important research questions.",
    "shortReason": "High snow exposure makes seasonal workload a central question.",
    "reviewed": "2026-11-18"
  }
];
