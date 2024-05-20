

const chartData = {
    areaChart: [6, 6, 3, 6, 6],
  
    donutChart: {
      donutChartData1: [
        { name: "Cruid Oil", y: 10, color: "#2996E5" },
        { name: "Natural Gas", y: 20, color: "#6CED4E" },
        { name: "Hydropower", y: 30, color: "#4B52E2" },
        { name: "Solar", y: 40, color: "#FFE700" },
        { name: "Biogas", y: 50, color: "#FF0400" },
        { name: "Petroleum Products", y: 10, color: "#9C83FF" },
        { name: "Coal and Coke", y: 20, color: "#FF6E00" },
        { name: "Biodiesel", y: 30, color: "#FB3F71 " },
        { name: "Biomas", y: 40, color: "#02AFAE" },
      ],
    },
  
    lineChart: {
      categories: [
        "1990",
        "1995",
        "2000",
        "2005",
        "2010",
        "2015",
        "2020",
      ],
      series: [
        { name: "Cruid Oil", data: [22487, 24679, 28374, 27394, 24908, 24890, 21678], color: "#2996E5" },
        { name: "Natural Gas", data: [35875, 35890, 37643, 36483, 37890, 36203, 32738], color: "#6CED4E" },
        { name: "Hydropower", data: [14233, 12736, 15890, 26830, 26938, 25938, 20890], color: "#4B52E2" },
        { name: "Solar", data: [0, 0, 11, 38, 63, 75, 93], color: "#FFE700" },
        { name: "Biogas", data: [0, 4, 6, 12, 18, 21, 41], color: "#FF0400" },
        { name: "Petroleum Products", data: [2521, 2234, 1234, 2346, 5890, 7980, 1890], color: "#9C83FF" },
        { name: "Cole and Coke", data: [540, 556, 779, 1033, 1223, 1490, 2390], color: "#FF6E00" },
        { name: "Biodiesel", data: [24, 114, 188, 300, 389, 387, 379], color: "#FB3F71" },
        { name: "Biomas", data: [0, 0, 183, 287, 256, 267, 256], color: "#02AFAE" },
      ],
    },
  
    columnChartData: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May"],
      series: [
        {
          name: "Data",
          data: [10, 20, 30, 40, 50],
        },
      ],
    },
  
    BarChartData: {
      categories: ["Category 1", "Category 2", "Category 3"],
      series: [
        { name: "Series 1", data: [10, 20, 30] },
        { name: "Series 2", data: [5, 15, 25] },
        // Add more series data if needed
      ],
    },
  
    // Sankey Chart Data
    sankeyChartData: {
      nodes: [
        { id: "Node 1" },
        { id: "Node 2" },
        { id: "Node 3" },
        { id: "Node 4" },
      ],
      links: [
        { source: "Node 1", target: "Node 2", value: 5 },
        { source: "Node 1", target: "Node 3", value: 8 },
        { source: "Node 2", target: "Node 4", value: 3 },
        { source: "Node 3", target: "Node 4", value: 6 },
      ],
    },
  };
  
  export default chartData;
  