module.exports = {
    name: "Create Chart V2",
  
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
          "id": "labels1",
          "name": "Labels 1",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels2",
          "name": "Labels 2",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels3",
          "name": "Labels 3",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels4",
          "name": "Labels 4",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels5",
          "name": "Labels 5",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels6",
          "name": "Labels 6",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels7",
          "name": "Labels 7",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels8",
          "name": "Labels 8",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels9",
          "name": "Labels 9",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels10",
          "name": "Labels 10",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels11",
          "name": "Labels 11",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "labels12",
          "name": "Labels 12",
          "description": "Type: List\n\nDescription: The Lables to use",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets1",
          "name": "DataSets 1",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets2",
          "name": "DataSets 2",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets3",
          "name": "DataSets 3",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets4",
          "name": "DataSets 4",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets5",
          "name": "DataSets 5",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets6",
          "name": "DataSets 6",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },        {
          "id": "datasets7",
          "name": "DataSets 7",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets8",
          "name": "DataSets 8",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets9",
          "name": "DataSets 9",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },        {
          "id": "datasets10",
          "name": "DataSets 10",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets11",
          "name": "DataSets 11",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
        {
          "id": "datasets12",
          "name": "DataSets 12",
          "description": "Type: List\n\nDescription: For Help... check this guide:/nhttps://quickchart.io/documentation/send-charts-discord-bot/",
          "types": ["unspecified", "list", "text"]
        },
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
      const labels1 = this.GetInputValue("labels1", cache);
      const labels2 = this.GetInputValue("labels2", cache);
      const labels3 = this.GetInputValue("labels3", cache);
      const labels4 = this.GetInputValue("labels4", cache);
      const labels5 = this.GetInputValue("labels5", cache);
      const labels6 = this.GetInputValue("labels6", cache);
      const labels7 = this.GetInputValue("labels7", cache);
      const labels8 = this.GetInputValue("labels8", cache);
      const labels9 = this.GetInputValue("labels9", cache);
      const labels10 = this.GetInputValue("labels10", cache);
      const labels11 = this.GetInputValue("labels11", cache);
      const labels12 = this.GetInputValue("labels12", cache);

      const label = this.GetInputValue("label", cache);

      const datasets1 = this.GetInputValue("datasets1", cache);
      const datasets2 = this.GetInputValue("datasets2", cache);
      const datasets3 = this.GetInputValue("datasets3", cache);
      const datasets4 = this.GetInputValue("datasets4", cache);
      const datasets5 = this.GetInputValue("datasets5", cache);
      const datasets6 = this.GetInputValue("datasets6", cache);
      const datasets7 = this.GetInputValue("datasets7", cache);
      const datasets8 = this.GetInputValue("datasets8", cache);
      const datasets9 = this.GetInputValue("datasets9", cache);
      const datasets10 = this.GetInputValue("datasets10", cache);
      const datasets11 = this.GetInputValue("datasets11", cache);
      const datasets12 = this.GetInputValue("datasets12", cache);

      const chart = new QuickChart();
      chart
        .setConfig({
          type: chart_types,
          data: { labels: [labels1, labels2, labels3, labels4, labels5, labels6, labels7, labels8, labels9, labels10, labels11, labels12], 
          datasets: [{ label: label, data: [datasets1, datasets2, datasets3, datasets4, datasets5, datasets6, datasets7, datasets8, datasets9, datasets10, datasets11, datasets12] }] },
        })
        .setWidth(800)
        .setHeight(400);
      
      result = (chart.getUrl());
      this.StoreOutputValue(result, "url", cache);
      this.RunNextBlock("action", cache);
    }
  }