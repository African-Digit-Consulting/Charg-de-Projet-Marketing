// New chart
var options = {
  series: [45, 16],
  colors: ["#fd671a", "#CC3D00"],
  chart: {
  height: 350,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    dataLabels: {
      name: {
        fontSize: '22px',
        color: '#fd671a',
      },
      value: {
        fontSize: '16px',
      },
      total: {
        show: true,
        label: 'Total',
        formatter: function (w) {
          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
          return 61
        }
      }
    }
  }
},
labels: ['Nouvelle zone de prospection', 'Nouveau prospect'],
};

var chart = new ApexCharts(document.querySelector("#newChart"), options);
chart.render();
// Second chart
var options = {
  series: [{
  name: 'Net Profit',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
}, {
  name: 'Revenue',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
}, {
  name: 'Free Cash Flow',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
}],
  chart: {
  type: 'bar',
  height: 200
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#secondChart"), options);
chart.render();
// Product chart
var options = {
  series: [{
  name: 'Farine pâtissière',
  data: [31, 40, 28, 51, 42, 109, 100],
  color: '#fd671a'
}, {
  name: 'Farine boulangère',
  data: [11, 32, 45, 32, 34, 52, 41],
  color: '#CC3D00'
}],
  chart: {
  height: 350,
  type: 'area'
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth'
},
xaxis: {
  type: 'Jour',
  categories: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]
},
tooltip: {
  x: {
    format: 'dd'
  },
},
};

var chart = new ApexCharts(document.querySelector("#thirdChart"), options);
chart.render();
// Stock chart
var options = {
  series: [
  {
    data: [
      {
        x: 'Entrepôt 1',
        y: 1.2
      },
      {
        x: 'Entrepôt 2',
        y: 0.4
      },
      {
        x: 'Entrepôt 3',
        y: -1.4
      },
      {
        x: 'Entrepôt 4',
        y: 2.7
      },
      {
        x: 'Entrepôt 5',
        y: -0.3
      },
      {
        x: 'Entrepôt 6',
        y: 5.1
      },
      {
        x: 'Entrepôt 7',
        y: -2.3
      },
      {
        x: 'Entrepôt 8',
        y: 2.1
      },
      {
        x: 'Entrepôt 9',
        y: 0.3
      },
      {
        x: 'Entrepôt 10',
        y: 0.12
      },
      {
        x: 'Entrepôt 11',
        y: -2.31
      }
    ]
  }
],
  legend: {
  show: false
},
chart: {
  height: 300,
  type: 'treemap'
},
title: {
  text: ''
},
dataLabels: {
  enabled: true,
  style: {
    fontSize: '9px',
  },
  formatter: function(text, op) {
    return [text, op.value]
  },
  offsetY: -4
},
plotOptions: {
  treemap: {
    enableShades: true,
    shadeIntensity: 0.5,
    reverseNegativeShade: true,
    colorScale: {
      ranges: [
        {
          from: -6,
          to: 0,
          color: '#FF540A'
        },
        {
          from: 0.001,
          to: 6,
          color: '#fd671a'
        }
      ]
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#stockChart"), options);
chart.render();
// Stock 2 chart
var options = {
  series: [
  {
    name: 'Vente1 Total',
    group: 'Total',
    data: [44000, 55000, 41000, 67000, 22000, 43000, 55000, 23000]
  },
  {
    name: 'Vente2 Actuelle',
    group: 'actual',
    data: [48000, 50000, 40000, 65000, 25000, 40000, 22000, 45000]
  },
  {
    name: 'Vente3 Total',
    group: 'Total',
    data: [13000, 36000, 20000, 8000, 13000, 27000, 10000, 35000]
  },
  {
    name: 'Vente4 Actuelle',
    group: 'actual',
    data: [20000, 40000, 25000, 10000, 12000, 28000, 32000, 15000]
  }
],
  chart: {
  type: 'bar',
  height: 300,
  stacked: true,
},
stroke: {
  width: 1,
  colors: ['#fff']
},
dataLabels: {
  formatter: (val) => {
    return val / 1000 + 'K'
  }
},
plotOptions: {
  bar: {
    horizontal: false
  }
},
xaxis: {
  categories: [
    'Abidjan sud',
    'Abidjan nord1',
    'Abidjan nord2',
    'Banlieue',
    'San pedro',
    'Man',
    'Daloa',
    'Gagnoa'
  ]
},
fill: {
  opacity: 1
},
colors: ['#CC3D00', '#fd671a', '#FF8D5C', '#FFC6AD'],
yaxis: {
  labels: {
    formatter: (val) => {
      return val / 1000 + 'K'
    }
  }
},
legend: {
  position: 'top',
  horizontalAlign: 'left'
}
};

var chart = new ApexCharts(document.querySelector("#stock2Chart"), options);
chart.render();
// Performances chart
var options = {
  series: [{
  name: 'Moyenne: Client 1',
  data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  color: '#FF8D5C'
}, {
  name: 'Elévée: Client 2',
  data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  color: '#FF540A'
}, {
  name: 'Faible: Client 3',
  data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
  color: '#FFC6AD'
}],
  chart: {
  type: 'bar',
  height: 300
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Fév', 'Mar', 'Avr', 'Mai', 'Ju', 'Jul', 'Août', 'Sept', 'Oct'],
},
yaxis: {
  title: {
    text: '% (pourcentage)'
  }
},
fill: {
  opacity: 1
},
tooltip: {
  y: {
    formatter: function (val) {
      return "% " + val + " pourcentage"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#perfChart"), options);
chart.render();
// Product chart