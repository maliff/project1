import React, { useEffect, useRef, useState } from "react";
import chartData from "./AllChartData";
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more'; // Import additional modules if needed
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge'; // Import additional modules if needed
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineController,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  PieController,
  ArcElement,
  Title,
} from "chart.js";

// Initialize the additional modules
HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineController,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  PieController,
  ArcElement,
  Title
);

const LineChart = {
  chart: {
    type: 'line'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: chartData.lineChart.categories,
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Value'
    }
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: chartData.lineChart.series
};

const BarChart = {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: chartData.lineChart.categories,
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Value'
    }
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: chartData.lineChart.series
};

const AreaChart = {
  chart: {
    type: 'area'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: chartData.lineChart.categories,
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Value'
    }
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: chartData.lineChart.series
};

const DataTrendAnalysis = {
  chart: {
    type: 'bar'
  },
  title: {
    text: ''
  },
  xAxis: {
    categories: chartData.lineChart.categories,
    title: {
      text: 'Year'
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Value'
    }
  },
  legend: {
    align: 'right',
    verticalAlign: 'middle',
    layout: 'vertical',
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: chartData.lineChart.series
};

const PlantEfficiency = {
     chart: {
        type: 'gauge',
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: '20%'
    },

    title: {
        text: ''
    },

    pane: {
        startAngle: -90,
        endAngle: 89.9,
        background: null,
        center: ['50%', '75%'],
        size: '110%'
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickPixelInterval: 72,
        tickPosition: 'inside',
        tickColor:'#FFFFFF',
        tickLength: 20,
        tickWidth: 2,
        minorTickInterval: null,
        labels: {
            distance: 20,
            style: {
                fontSize: '14px'
            }
        },
        lineWidth: 0,
        plotBands: [{
            from: 0,
            to: 30,
            color: '#DF5353', // red
            thickness: 20
        }, {
            from: 30,
            to: 48,
            color: '#55BF3B', // yellow
            thickness: 20
        }, {
            from: 48,
            to: 100,
            color: '#DF5353', // red
            thickness: 20
        }]
    },

    series: [{
        name: 'Speed',
        data: [37],
        tooltip: {
            valueSuffix: ' %'
        },
        dataLabels: {
            format: '<div style="text-align: center">Calculated {y}% <br/> Allowable range 30% - 48%</div>',
            borderWidth: 0,
            color: '#333333',
            style: {
                fontSize: '16px'
            }
        },
        dial: {
            radius: '80%',
            backgroundColor: 'gray',
            baseWidth: 12,
            baseLength: '0%',
            rearLength: '0%'
        },
        pivot: {
            backgroundColor: 'gray',
            radius: 6
        }

    }]
  };

  // Add some life
setInterval(() => {
    const chart = Highcharts.charts[0];
    if (chart && !chart.renderer.forExport) {
        const point = chart.series[0].points[0],
            inc = Math.round((Math.random() - 0.5) * 20);

        let newVal = point.y + inc;
        if (newVal < 0 || newVal > 200) {
            newVal = point.y - inc;
        }

        point.update(newVal);
    }

}, 3000);


export { LineChart, BarChart, AreaChart, DataTrendAnalysis, PlantEfficiency };
