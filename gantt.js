var labels = ["planning"];
// THE CHART
Highcharts.ganttChart('container', {
  title: {
    text: 'Highcharts Gantt With Subtasks'
  },
  chart: {
    styleMode: true,
    plotBorderWidth: 1,
    collapsed:false,
  },

  xAxis: [{
    // className:highcharts-axis-labels,
    title: {
      x: 6,
      y: -13,
      useHTML: true,
      style: {
        position: 'absolute',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        paddingLeft: '48px',
        paddingRight: '48px',
        paddingTop: '9px',
        paddingBottom: '8px',
        border: '1px solid rgb(102, 102, 102)',
        marginBottom: '30px'
      },
      text: "Project",
      plotBorderWidth: 1
    },
    tickInterval: 1000 * 60 * 60 * 24 * 30, // Month
    labels: {
      format: '{value:%b}',
      style: {
        fontSize: '6px'
      }
    },
    min: Date.UTC(2014, 0, 0),
    max: Date.UTC(2016, 12, 0),
    currentDateIndicator: true,
  },
  {
    tickInterval: 1000 * 60 * 60 * 24 * 365, // Year
    title: {
      x: 6,
      y: -18.5,
      useHTML: true,
      style: {
        position: 'absolute',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        paddingLeft: '48px',
        paddingRight: '48px',
        paddingTop: '15px',
        paddingBottom: '15px',
        border: '1px solid rgb(102, 102, 102)',
        marginBottom: '30px'
      },
      text: "Project",
      plotBorderWidth: 1
    },
    labels: {
      format: '{value:%Y}',
      style: {
        fontSize: '15px'
      }
    },
    linkedTo: 0
  }
  ],
  yAxis: {
    // className: 'highcharts-label-icon',
  },

  // path:{
  //   style: {
  //     transform: translate(90,175);
  //   },
  // },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },

  accessibility: {
    keyboardNavigation: {
      seriesNavigation: {
        mode: 'serialize'
      }
    },
    point: {
      // descriptionFormatter: function (point) {
      //   var dependency = point.dependency &&
      //       point.series.chart.get(point.dependency).name,
      //     dependsOn = dependency ? ' Depends on ' + dependency + '.' : '';

      //   return Highcharts.format(
      //     '{point.yCategory}. Start {point.x:%Y-%m-%d}, end {point.x2:%Y-%m-%d}.{dependsOn}',
      //     { point, dependsOn }
      //   );
      // }
    }
  },
  lang: {
    // accessibility: {
    //   axis: {
    //     xAxisDescriptionPlural: 'The chart has a two-part X axis showing time in both week numbers and days.'
    //   }
    // }
  },
  // transform: translate(-50%, -50%) rotate(90deg),
  yAxis: {
    collapsed:false,
    style:{
    	style:{
        width: '100px',
        height: '18px'
      }
    },
      useHTML:true,
      labels: {
        align:"left"
      },
  },

  series: [{
    data: [
      {
        collapsed: true,
        name: 'Planning',
        id: 'planning',
        dataLables:{
          style:{
            color:"red",
            transform:"translate(100,100)"
          }
        },
        start: Date.UTC(2014, 4, 18),
        end: Date.UTC(2014, 11, 25),
      },
      {
        name: 'Requirements',
        parent: 'planning',
        start: Date.UTC(2015, 0, 0),
        end: Date.UTC(2015, 3, 0)
      }, {
        name: 'Design',
        dependency: 'requirements',
        parent: 'planning',

        start: Date.UTC(2015, 0, 0),
        end: Date.UTC(2015, 10, 25)
      },
      {
        collapsed: true,
        name: 'Develop',
        id: 'develop',
        start: Date.UTC(2015, 0, 0),
        end: Date.UTC(2015, 10, 25)
      }, {
        name: 'Create unit tests',
        dependency: 'requirements',
        parent: 'develop',
        start: Date.UTC(2015, 0, 0),
        end: Date.UTC(2015, 10, 25)
      }, {
       
        name: 'Implement',
        dependency: 'unit_tests',
        parent: 'develop',
        start: Date.UTC(2015, 0, 0),
        end: Date.UTC(2015, 10, 25)
      }
    ]

  }]
})
  ;