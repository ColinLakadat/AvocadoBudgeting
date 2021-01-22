let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Quicksand';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#282828';

let massPopChart = new Chart(myChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Rent', 'Utilities', 'Gas', 'Groceries', 'Recreation', 'Savings'],
    datasets:[{
      label:'Money Spent',
      data:[
        1000,
        200,
        75,
        200,
        300,
        200
      ],
      //backgroundColor:'green',
      backgroundColor:[
        '#144710',
        '#FFCA38',
        '#1191E5',
        '#63C56D',
        '#3F7E45',
        '#282828',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'My Budget',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});

let myDChart = document.getElementById('myChart1').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Quicksand';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#282828';

let popChart = new Chart(myDChart, {
  type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Rent', 'Utilities', 'Gas', 'Groceries', 'Recreation', 'Savings'],
    datasets:[{
      label:'Money Spent',
      data:[
        1000,
        200,
        75,
        200,
        300,
        200
      ],
      //backgroundColor:'green',
      backgroundColor:[
        '#144710',
        '#FFCA38',
        '#1191E5',
        '#63C56D',
        '#3F7E45',
        '#282828',
        'rgba(255, 99, 132, 0.6)'
      ],
      borderWidth:1,
      borderColor:'#777',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'My Budget',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});
