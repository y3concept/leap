AmCharts.makeChart( "industryChart", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "industry": "industry 1",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 2",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 3",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 4",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 5",
    "value": Math.floor(Math.random() * 100)
  } ],
  "valueField": "value",
  "titleField": "industry",
  "balloon":{
   "fixedPosition":true
  },
  "labelText": "",
  "titles": [
		{
			"id": "Industry",
			"text": "Industry"
		}
	]
} );

AmCharts.makeChart( "demographicsChart", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "industry": "industry 1",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 2",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 3",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 4",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 5",
    "value": Math.floor(Math.random() * 100)
  } ],
  "valueField": "value",
  "titleField": "industry",
  "balloon":{
   "fixedPosition":true
  },
  "labelText": "",
  "titles": [
		{
			"id": "Demographics",
			"text": "Demographics"
		}
	]
} );

AmCharts.makeChart( "revenueChart", {
  "type": "pie",
  "theme": "light",
  "dataProvider": [ {
    "industry": "industry 1",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 2",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 3",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 4",
    "value": Math.floor(Math.random() * 100)
  }, {
    "industry": "industry 5",
    "value": Math.floor(Math.random() * 100)
  } ],
  "valueField": "value",
  "titleField": "industry",
  "balloon":{
   "fixedPosition":true
  },
  "labelText": "",
  "titles": [
		{
			"id": "Revenue",
			"text": "Revenue"
		}
	]
} );