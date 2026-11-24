(function(root){
  'use strict';
  const defaults={CAD:{customers:40,price:null,minutes:18,crew:2,wage:27,variable:2.5,acquisition:40,fixed:6000,hours:16},USD:{customers:40,price:null,minutes:18,crew:2,wage:23,variable:2.2,acquisition:50,fixed:6000,hours:16}};
  const bounds={customers:[0,500,1],price:[0,10000,0.01],visits:[1,100,1],minutes:[1,240,1],crew:[1,12,1],wage:[0,200,0.5],variable:[0,200,0.1],acquisition:[0,2000,1],fixed:[0,1000000,100],hours:[1,48,1]};
  function calculate(m,visits){
    const hasPrice=typeof m.price==='number'&&Number.isFinite(m.price);
    const revenue=hasPrice?m.customers*m.price:null;
    const labourPerCustomer=visits*m.minutes/60*m.crew*m.wage;
    const otherPerCustomer=visits*m.variable+m.acquisition;
    const contribution=hasPrice?m.price-labourPerCustomer-otherPerCustomer:null;
    const labour=m.customers*labourPerCustomer;
    const variable=m.customers*otherPerCustomer;
    const costs=labour+variable+m.fixed;
    const profit=hasPrice?revenue-costs:null;
    const breakEven=contribution>0?Math.ceil(m.fixed/contribution):null;
    const routeHours=m.customers*m.minutes/60;
    const capacity=Math.floor(m.hours*60/m.minutes);
    return {hasPrice,revenue,labour,variable,costs,profit,contribution,breakEven,routeHours,capacity,capacityExceeded:routeHours>m.hours,margin:revenue>0?profit/revenue:null};
  }
  function convert(n,from,to,fx){return typeof n==='number'&&Number.isFinite(n)?from===to?n:from==='USD'?n*fx:n/fx:null;}
  function validate(field,value){return Object.hasOwn(bounds,field)&&typeof value==='number'&&Number.isFinite(value)&&value>=bounds[field][0]&&value<=bounds[field][1]&&(!['customers','crew','visits'].includes(field)||Number.isInteger(value));}
  function createInputs(currency){return {...defaults[currency==='CAD'?'CAD':'USD'],visits:20};}
  root.SnowModel={defaults,bounds,calculate,convert,validate,createInputs};
})(typeof window==='undefined'?globalThis:window);
