let conversionData = [{
  "id": "convert-root",
  "title": "Convert Unit: %s",
  "contexts": ["selection"],
  "children": [{
    "id": "convert-length",
    "parentId": "convert-root",
    "title": "Length Conversions",
    "children": [{
      "id": "convert-km-mi",
      "parentId": "convert-length",
      "title": "Kilometers to Miles"
    },
    {
      "id": "convert-m-ft",
      "parentId": "convert-length",
      "title": "Meters to Feet"
    },
    {
      "id": "convert-cm-in",
      "parentId": "convert-length",
      "title": "Centimeters to Inches"
    },
    {
      "id": "convert-m-yd",
      "parentId": "convert-length",
      "title": "Meters to Yards"
    },
    {
      "id": "convert-mi-km",
      "parentId": "convert-length",
      "title": "Miles to Kilometers"
    },
    {
      "id": "convert-ft-m",
      "parentId": "convert-length",
      "title": "Feet to Meters"
    },
    {
      "id": "convert-in-cm",
      "parentId": "convert-length",
      "title": "Inches to Centimeters"
    },
    {
      "id": "convert-yd-m",
      "parentId": "convert-length",
      "title": "Yards to Meters"
    }]
  },
  {
    "id": "convert-mass",
    "parentId": "convert-root",
    "title": "Mass Conversions",
    "children": [{
      "id": "convert-kg-lb",
      "parentId": "convert-mass",
      "title": "Kilograms to Pounds"
    },
    {
      "id": "convert-g-oz",
      "parentId": "convert-mass",
      "title": "Grams to Ounces"
    },
    {
      "id": "convert-mt-st",
      "parentId": "convert-mass",
      "title": "Metric Ton to Short Ton (US)"
    },
    {
      "id": "convert-lb-kg",
      "parentId": "convert-mass",
      "title": "Pounds to Kilograms"
    },
    {
      "id": "convert-oz-g",
      "parentId": "convert-mass",
      "title": "Ounces to Grams"
    },
    {
      "id": "convert-st-mt",
      "parentId": "convert-mass",
      "title": "Short Ton (US) to Metric Ton"
    }]
  },{
    "id": "convert-volume",
    "parentId": "convert-root",
    "title": "Volume Conversions",
    "children": [{
      "id": "convert-floz-ml",
      "parentId": "convert-volume",
      "title": "Fluid Ounces to Milliliters"
    },
    {
      "id": "convert-gal-l",
      "parentId": "convert-volume",
      "title": "Gallons to Liters"
    },
    {
      "id": "convert-tsp-ml",
      "parentId": "convert-volume",
      "title": "Teaspoons to Milliliters"
    },
    {
      "id": "convert-tbsp-ml",
      "parentId": "convert-volume",
      "title": "Tablespoons to Milliliters"
    },
    {
      "id": "convert-cup-ml",
      "parentId": "convert-volume",
      "title": "Cups to Milliliters"
    },
    {
      "id": "convert-ml-floz",
      "parentId": "convert-volume",
      "title": "Milliliters to Fluid Ounces"
    },
    {
      "id": "convert-l-gal",
      "parentId": "convert-volume",
      "title": "Liters to Galons"
    },
    {
      "id": "convert-ml-tsp",
      "parentId": "convert-volume",
      "title": "Milliliters to Teaspoons"
    },
    {
      "id": "convert-ml-tbsp",
      "parentId": "convert-volume",
      "title": "Milliliters to Tablespoons"
    },
    {
      "id": "convert-ml-cup",
      "parentId": "convert-volume",
      "title": "Milliliters to Cups"
    }]
  }]
}]

chrome.contextMenus.create({
  id: "convert-root",
  title: "Convert Unit: %s",
  contexts: ["selection"]
});

const lengthConversions = conversionData[0].children[0].children;

chrome.contextMenus.create({
  id: "convert-length",
  parentId: "convert-root",
  title: "Length Conversions",
  contexts: ["selection"]
});

lengthConversions.forEach(conversion => {
  chrome.contextMenus.create({
    id: conversion.id,
    parentId: "convert-length",
    title: conversion.title,
    contexts: ["selection"]
  });
});

const massConversions = conversionData[0].children[1].children;

chrome.contextMenus.create({
  id: "convert-mass",
  parentId: "convert-root",
  title: "Mass Conversions",
  contexts: ["selection"]
});

massConversions.forEach(conversion => {
  chrome.contextMenus.create({
    id: conversion.id,
    parentId: "convert-mass",
    title: conversion.title,
    contexts: ["selection"]
  });
});

const volumeConversions = conversionData[0].children[2].children;

chrome.contextMenus.create({
  id: "convert-volume",
  parentId: "convert-root",
  title: "Volume Conversions",
  contexts: ["selection"]
});

volumeConversions.forEach(conversion => {
  chrome.contextMenus.create({
    id: conversion.id,
    parentId: "convert-volume",
    title: conversion.title,
    contexts: ["selection"]
  });
});


chrome.contextMenus.onClicked.addListener(info => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: {id: info.menuItemId, parent: info.parentMenuItemId, value: info.selectionText}});  
  });
})
