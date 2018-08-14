var industryChart = AmCharts.makeChart("industryChart", {
    "hideCredits": true, // removing amchart watermarks; for testing purpose only
    "type": "pie",
    "theme": "light",
    "dataProvider": [
        {
            "industry": "Finance/ Insurance",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Professional/ Scientific",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Rent/ Real Estate",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Construction",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Healthcare",
            "value": Math.floor(Math.random() * 100)
        }
    ],
    "valueField": "value",
    "titleField": "industry",
    "balloon": {
        "fixedPosition": true
    },
    "labelRadius": -30,
    "labelText": "[[percents]]%",
    "autoMargins": false,
    "marginTop": 0,
    "marginLeft": 0,
    "marginRight": 0,
    "pullOutRadius": 0,
    "titles": [
        {
            "id": "Industry",
            "size": 15,
            "text": "Industry"
        }
    ]
});

var demographicsChart = AmCharts.makeChart("demographicsChart", {
    "hideCredits": true, // removing amchart watermarks; for testing purpose only
    "type": "serial",
    "categoryField": "category",
    "rotate": true,
    "startDuration": 1,
    "categoryAxis": {
        "gridPosition": "start",
        "gridThickness": 0
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "[[title]] of [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "title": "Male",
            "type": "column",
            "valueField": "Male",
            "fixedColumnWidth": 15
        },
        {
            "balloonText": "[[title]] of [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "title": "Female",
            "type": "column",
            "valueField": "Female",
            "fixedColumnWidth": 15
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "id": "ValueAxis-1",
            "stackType": "100%",
            "gridThickness": 0,
            "title": ""
        }
    ],
    "allLabels": [],
    "balloon": {},
    "titles": [
        {
            "id": "Title-1",
            "size": 15,
            "text": "Demographics"
        }
    ],
    "dataProvider": [
        {
            "category": "Age 15 - 24",
            "Male": Math.floor(Math.random() * 20),
            "Female": Math.floor(Math.random() * 20)
        },
        {
            "category": "Age 25 - 34",
            "Male": Math.floor(Math.random() * 20),
            "Female": Math.floor(Math.random() * 20)
        },
        {
            "category": "Age 35 - 44",
            "Male": Math.floor(Math.random() * 20),
            "Female": Math.floor(Math.random() * 20)
        }
    ]
});

var revenueChart = AmCharts.makeChart("revenueChart", {
    "hideCredits": true,
    "type": "serial",
    "categoryField": "category",
    "startDuration": 1,
    "fontSize": 13,
    "theme": "default",
    "categoryAxis": {
        "gridPosition": "start",
        "gridThickness": 0,
        "labelRotation": 45
    },
    "trendLines": [],
    "graphs": [
        {
            "balloonText": "[[title]] of [[category]]:[[value]]",
            "bullet": "round",
            "bulletSize": 10,
            "id": "AmGraph-1",
            "lineThickness": 3,
            "title": "Revenue",
            "type": "smoothedLine",
            "valueField": "column-1"
        }
    ],
    "guides": [],
    "valueAxes": [
        {
            "id": "ValueAxis-1",
            "position": "bottom",
            "autoGridCount": false,
            "axisThickness": 0,
            "tickLength": 0,
            "title": ""
        }
    ],
    "allLabels": [],
    "balloon": {},
    "titles": [
        {
            "id": "Title-1",
            "size": 15,
            "text": "Revenues"
        }
    ],
    "dataProvider": [
        {
            "category": "Year 1",
            "column-1": Math.floor(Math.random() * 100)
        },
        {
            "category": "Year 2",
            "column-1": Math.floor(Math.random() * 300)
        },
        {
            "category": "Year 3",
            "column-1": Math.floor(Math.random() * 500)
        },
        {
            "category": "Year 4",
            "column-1": Math.floor(Math.random() * 500)
        },
        {
            "category": "Year 5",
            "column-1": Math.floor(Math.random() * 1000)
        }
    ]
});


function redrawChart() {
    industryChart.dataProvider = [{
        "industry": "Finance/ Insurance",
        "value": Math.floor(Math.random() * 100)
    },
        {
            "industry": "Professional/ Scientific",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Rent/ Real Estate",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Construction",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Healthcare",
            "value": Math.floor(Math.random() * 100)
        }];

    industryChart.validateData();
    industryChart.animateAgain();

    demographicsChart.dataProvider = [
        {
            "category": "Age 15 - 24",
            "Male": Math.floor(Math.random() * 20),
            "Female": Math.floor(Math.random() * 20)
        },
        {
            "category": "Age 25 - 34",
            "Male": Math.floor(Math.random() * 20),
            "Female": Math.floor(Math.random() * 20)
        },
        {
            "category": "Age 35 - 44",
            "Male": Math.floor(Math.random() * 20),
            "Female": Math.floor(Math.random() * 20)
        }
    ];

    demographicsChart.validateData();
    demographicsChart.animateAgain();

    revenueChart.dataProvider = [
        {
            "category": "Year 1",
            "column-1": Math.floor(Math.random() * 100)
        },
        {
            "category": "Year 2",
            "column-1": Math.floor(Math.random() * 300)
        },
        {
            "category": "Year 3",
            "column-1": Math.floor(Math.random() * 500)
        },
        {
            "category": "Year 4",
            "column-1": Math.floor(Math.random() * 500)
        },
        {
            "category": "Year 5",
            "column-1": Math.floor(Math.random() * 1000)
        }
    ];

    revenueChart.validateData();
    revenueChart.animateAgain();
}