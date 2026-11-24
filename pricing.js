(function(root){
  'use strict';
  const service='Driveway + walkway + steps';
  const reviewed='2026-11-19';
  const records=[
    {id:'super-value-full',provider:'Super Value Home Services',markets:['ca-4611040'],currency:'CAD',amount:999.75,eligible:true,reviewed,season:'November 1–March 31 · 5 months',seasonYear:'Not specified',size:'Up to 4 cars (2 wide × 2 deep)',trigger:'5 cm / 2 inches',tax:'Before 5% GST',scope:'Driveway, front sidewalk and front steps',notes:'Service within 24 hours. Wind-blown buildup is excluded; availability and property conditions apply.',url:'https://www.supervaluehomeservices.com/snow-clearing/'},
    {id:'terra-nova-full',provider:'Terra Nova Outdoor Services',markets:['ca-4611040'],currency:'CAD',amount:1300,eligible:true,reviewed,season:'November 1–March 31 · 5 months',seasonYear:'Not specified',size:'Residential; dimensions not published',trigger:'2 inches',tax:'Before GST',scope:'Driveway, front walkway and steps',notes:'Published full-season total, paid in five installments. Property size/layout may change the quote. Normally within 24 hours; major storms may take 36 hours.',url:'https://experienceterranova.com/'},
    {id:'oara-double-walks',provider:'OARA Contracting',markets:['us-place-3825700','us-place-3884780','us-place-2743864'],currency:'USD',amount:1049,eligible:true,reviewed,season:'Full season · start/end dates not published',seasonYear:'Not specified',size:'Double driveway, approximately 13–22 ft wide',trigger:'2 inches',tax:'Tax treatment not published; confirm before using as net revenue',scope:'Driveway, public sidewalk, front walk, porch and steps',notes:'Paid-in-full package. Fargo, West Fargo and Moorhead routes only, subject to availability. Oversized or unusual properties require a quote; ice control is separate.',url:'https://oaracontracting.com/snow-removal'},
    {id:'landing-double',provider:'Landing Lawn & Snow',markets:['ca-4806016'],currency:'CAD',amount:1190,eligible:true,reviewed,season:'November 1–April 30 · 6 months',seasonYear:'Not specified',size:'Double driveway, fits 2 cars',trigger:'About 1 cm / every snowfall',tax:'Provider states no GST on top',scope:'Driveway, front walk, steps and city sidewalk',notes:'Published prepaid season-pass total used as listed. Includes plow pile, front drifts and ice melt; services Chaparral and south Calgary neighbourhoods. This is a longer, broader package than the Winnipeg examples.',url:'https://landinglawn.ca/calgary-snow-removal/'},
    {id:'seine-regular',provider:'Seine River Yard Care',markets:['ca-4611040'],currency:'CAD',amount:1000,eligible:false,reviewed,season:'November 1–March 31 · 5 months',seasonYear:'Not specified',size:'Property-specific',trigger:'2.5 cm',tax:'Before GST',scope:'Driveway, walks and sidewalks; steps not explicit',notes:'CAD 200/month × 5, advertised starting price.',reason:'Starting price and unconfirmed step clearing; excluded from the automatic sample.',url:'https://www.sryc.ca/yard-maintenance/winter/'},
    {id:'fargo-snow-double',provider:'Fargo Snow',markets:['us-place-3825700','us-place-3884780'],currency:'USD',amount:955,eligible:false,reviewed,season:'Seasonal · dates not published',seasonYear:'Not specified',size:'Double driveway',trigger:'1- or 2-inch options',tax:'Not specified',scope:'Driveway only at the advertised starting price',notes:'Sidewalk and front-door detail service are add-ons without published package totals.',reason:'Starting driveway-only price; excluded from the requested service package.',url:'https://fargosnow.com/pricing/'},
    {id:'sunshine-prior-season',provider:'Sunshine Scapes',markets:['ca-4806016'],currency:'CAD',amount:749.95,eligible:false,reviewed,season:'November 1–March 31 · 5 months',seasonYear:'2025–2026',size:'Most residential properties; larger lots quoted',trigger:'Every snowfall',tax:'Not specified',scope:'Driveway, walkways, sidewalks and steps; salt included',notes:'CAD 149.99/month × 5 before listed discounts. The signup section still names winter 2025/2026.',reason:'Prior-season page and advertised starting rate; excluded until refreshed.',url:'https://www.sunshinescapes.ca/snow-removal'}
  ];
  const today=()=>new Date().toISOString().slice(0,10);
  function summarize(marketId,currency,asOf=today()){
    const cutoff=Date.parse(asOf+'T00:00:00Z'),seen=new Set();
    const evidence=records.filter(r=>r.markets.includes(marketId)&&r.currency===currency).map(r=>{
      const age=(cutoff-Date.parse(r.reviewed+'T00:00:00Z'))/86400000;
      const fresh=Number.isFinite(age)&&age>=0&&age<=180;
      const duplicate=seen.has(r.provider);if(r.eligible&&fresh)seen.add(r.provider);
      return {...r,included:r.eligible&&fresh&&!duplicate,exclusion:!fresh?'Review is over 180 days old or the review date is invalid; refresh required.':duplicate?'Duplicate provider; counted only once.':r.reason||null};
    });
    const included=evidence.filter(r=>r.included),n=included.length;
    const amounts=included.map(r=>r.amount);
    return {service,currency,asOf,kind:n>1?'sample-average':n===1?'single-provider':'unavailable',amount:n?Math.round(amounts.reduce((a,b)=>a+b,0)/n*100)/100:null,count:n,min:n?Math.min(...amounts):null,max:n?Math.max(...amounts):null,reviewed:n?included.map(r=>r.reviewed).sort()[0]:null,evidence,coverage:'Only explicitly listed local service areas. No city-to-county, nearby-city, province or state substitution.'};
  }
  root.SnowPricing={service,reviewed,records,summarize};
})(typeof window==='undefined'?globalThis:window);
