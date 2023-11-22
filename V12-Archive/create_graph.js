module.exports = {
    name: "Create Chart",
  
    description: "Creates a chart",
  
    category: ".Andy",
  
    inputs: [{
          "id": "action",
          "name": "Action",
          "description": "Type: Action\n\nDescription: Who Cares...",
          "types": ["action"]
        },
        {
          "id": "label",
          "name": "Label",
          "description": "Type: List\n\nDescription: The Lable to use",
          "types": ["unspecified", "text", "list"]
        },
        {
          "id": "labels",
          "name": "Labels",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["list", "unspecified"]
        },
        {
          "id": "datasets",
          "name": "DataSets",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["list", "unspecified"]
        }
      ],
  
    options: [{
      "id": "chart_types",
      "name": "Chart type",
      "description": "Description: The type of chart to generate",
      "type": "SELECT",
      "options": {
          'line': "Line chart",
          'bar': "Bar chart",
      }
  }],
  
    outputs: [
        {
          "id": "action",
          "name": "Action",
          "description": "Type: Action\n\nDescription: Executes the following blocks when this block finishes its task.",
          "types": ["action"]
        },
        {
          "id": "url",
          "name": "ChartUrl",
          "description": "Type: Text, unspecified\n\nDescription: The Finished Chart, PICTURE",
          "types": ["text", "unspecified"]
        }
    ],
  
    async code(cache) {
      const QuickChart = require('quickchart-js');
      const chart_types = this.GetOptionValue("chart_types", cache);
      const labels = this.GetInputValue("labels", cache);
      const label = this.GetInputValue("label", cache);
      const datasets = this.GetInputValue("datasets", cache);

      const chart = new QuickChart();
      chart
        .setConfig({
          type: chart_types,
          data: { labels: [labels], datasets: [{ label: label, data: [datasets] }] },
        })
        .setWidth(800)
        .setHeight(400);
      
      result = (chart.getUrl());
      this.StoreOutputValue(result, "url", cache);
      this.RunNextBlock("action", cache);
    }
  }