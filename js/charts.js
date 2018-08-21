const charts = {};

charts.init = () => {
    charts.industryChart = AmCharts.makeChart("industryChart", {
        "hideCredits": true, // removing amchart watermarks; for testing purpose only
        "type": "pie",
        "theme": "light",
        "dataProvider": [
            {
                "industry": "Finance / Insurance",
                "value": Math.floor(Math.random() * 100)
            },
            {
                "industry": "Professional / Scientific",
                "value": Math.floor(Math.random() * 100)
            },
            {
                "industry": "Rent / Real Estate",
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
        "colors": [
            "#007BFF",
            "#28A745",
            "#2683C6",
            "#27CED7",
            "#3E8853"
        ],
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

    charts.demographicsChart = AmCharts.makeChart("demographicsChart", {
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
        "colors": [
            "#3E8853",
            "#27CED7"
        ],
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

    charts.revenueChart = AmCharts.makeChart("revenueChart", {
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
                "lineAlpha": 0.3,
                "id": "AmGraph-1",
                "lineThickness": 3,
                "title": "Revenue",
                "type": "smoothedLine",
                "valueField": "column-1"
            }
        ],
        "guides": [],
        "colors": [
            "#3E8853"
        ],
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
}

charts.redrawChart = () => {
    charts.industryChart.dataProvider = [
        {
            "industry": "Finance / Insurance",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Professional / Scientific",
            "value": Math.floor(Math.random() * 100)
        },
        {
            "industry": "Rent / Real Estate",
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
    ];

    charts.industryChart.validateData();
    //industryChart.animateAgain();

    charts.demographicsChart.dataProvider = [
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

    charts.demographicsChart.validateData();
    //demographicsChart.animateAgain();

    charts.revenueChart.dataProvider = [
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

    charts.revenueChart.validateData();
    //revenueChart.animateAgain();
}


charts.initMarketChart = () => {
    charts.marketChart = AmCharts.makeChart("marketChart", {
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
                "lineAlpha": 0.3,
                "id": "AmGraph-1",
                "lineThickness": 3,
                "title": "Search Demand",
                "type": "smoothedLine",
                "valueField": "column-1"
            }
        ],
        "guides": [],
        "colors": [
            "#3E8853"
        ],
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
                "text": "Search Demand"
            }
        ],
        "dataProvider": [
            {
                "category": "Jan",
                "column-1": Math.floor(Math.random() * 100)
            },
            {
                "category": "Feb",
                "column-1": Math.floor(Math.random() * 200) + 70
            },
            {
                "category": "Mar",
                "column-1": Math.floor(Math.random() * 300) + 170
            },
            {
                "category": "Apr",
                "column-1": Math.floor(Math.random() * 400) + 270
            },
            {
                "category": "May",
                "column-1": Math.floor(Math.random() * 500) + 370
            },
            {
                "category": "Jun",
                "column-1": Math.floor(Math.random() * 600) + 470
            },
            {
                "category": "Jul",
                "column-1": Math.floor(Math.random() * 700) + 570
            },
            {
                "category": "Aug",
                "column-1": Math.floor(Math.random() * 800) + 670
            },
            {
                "category": "Sep",
                "column-1": Math.floor(Math.random() * 700) + 770
            },
            {
                "category": "Oct",
                "column-1": Math.floor(Math.random() * 1000) + 870
            },
            {
                "category": "Nov",
                "column-1": Math.floor(Math.random() * 1100) + 870
            },
            {
                "category": "Dec",
                "column-1": Math.floor(Math.random() * 1200) + 970
            }
        ]
    });
}