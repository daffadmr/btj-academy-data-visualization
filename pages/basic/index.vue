<template>
  <div class="container">
    <div class="grid md:grid-cols-2 gap-2">
      <div class="bg-gray-200 rounded-md shadow-md">
        <highchart :options="pieChartOptions" />
      </div>
      <div class="bg-gray-200 rounded-md shadow-md">
        <highchart :options="chartColumnOptions" :modules="['exporting', 'export-data']" />
      </div>
      <div class="bg-gray-200 rounded-md shadow-md">
        <highchart :options="chartColumnInvertedOptions" />
      </div>
      <div class="bg-gray-200 rounded-md shadow-md">
        <highchart :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieChartOptions: {
        chart: {
          type: 'pie'
        },
        title: {
          text: "Contoh Chart"
        },
        subtitle: {
          text: "Data Penduduk Tahun 2018-2023"
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal'
        },
        plotOptions: {
          pie: {
            // innerSize: '40%',
            allowPointSelect: true,
            dataLabels: {
              enabled: true,
              distance: -50,
              format: '{point.name} <br/> {point.y}'
            }
          }
        },
        series: [
          {
            name: 'Jumlah',
            data: [{
              name: 'Pria',
              y: 23232
            }, {
              name: 'Wanita',
              y: 29332
            }]
          }
        ],
      },
      chartOptions: {
        chart: {
          type: 'line'
        },
        title: {
          text: "Contoh Chart"
        },
        subtitle: {
          text: "Data Penduduk Tahun 2018-2023"
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal'
        },
        tooltip: {
          // enabled: false,
          // format: 'Tahun {x} <br/> jumlah penduduk {series.name}: <b>{point.y}</b>',
          //choose between format and formatter (pake salah satu aje)
          // formatter: function () {
          //   return `<b>Tahun ${this.x}</b> <br/> Jumlah penduduk ${this.series.name}: ${this.point.y}`
          // }
          //formatter untuk shared tooltip
          shared: true,
          formatter: function () {
            // console.log(this.points);
            return [`<b>Tahun ${this.x}</b><br/>`].concat(
              this.points ? this.points.map(point => {
                return `Jumlah penduduk ${point.series.name}: <b>${point.y}</b> <br/>`
              }) : 'Kosong pak'
            )
          }
          // split: true,
          // distance: 50
        },
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            name: 'Pria',
            data: [212223, 231223, 231223, 269990, 279990]
          },
          {
            name: 'Wanita',
            data: [212400, 251523, 261623, 279990, 299990]
          }
        ],
        xAxis: {
          title: {
            text: "Tahun"
          },
          categories: ['2018', '2019', '2020', '2021', '2022']
        },
        yAxis: {
          title: {
            text: "Jumlah penduduk"
          }
        }
      },
      chartColumnOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: "Contoh Chart"
        },
        subtitle: {
          text: "Data Penduduk Tahun 2018-2023"
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal'
        },
        tooltip: {
          // enabled: false,
          // format: 'Tahun {x} <br/> jumlah penduduk {series.name}: <b>{point.y}</b>'
          //choose between format and formatter (pake salah satu aje)
          // formatter: function () {
          //   return `<b>Tahun ${this.x}</b> <br/> Jumlah penduduk ${this.series.name}: ${this.point.y}`
          // }
          //formatter untuk shared tooltip
          shared: true,
          formatter: function () {
            // console.log(this.points);
            return [`<b>Tahun ${this.x}</b><br/>`].concat(
              this.points ? this.points.map(point => {
                return `Jumlah penduduk ${point.series.name}: ${point.y} <br/>`
              }) : 'Kosong pak'
            )
          }
        },
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            name: 'Pria',
            data: [212223, 231223, 231223, 269990, 279990]
          },
          {
            name: 'Wanita',
            data: [212400, 251523, 261623, 279990, 299990]
          }
        ],
        xAxis: {
          title: {
            text: "Tahun"
          },
          categories: ['2018', '2019', '2020', '2021', '2022']
        },
        yAxis: {
          title: {
            text: "Jumlah penduduk"
          }
        }
      },
      chartColumnInvertedOptions: {
        chart: {
          type: 'column',
          inverted: true
        },
        title: {
          text: "Contoh Chart"
        },
        subtitle: {
          text: "Data Penduduk Tahun 2018-2023"
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal'
        },
        tooltip: {
          // enabled: false,
          // format: 'Tahun {x} <br/> jumlah penduduk {series.name}: <b>{point.y}</b>'
          //choose between format and formatter (pake salah satu aje)
          // formatter: function () {
          //   return `<b>Tahun ${this.x}</b> <br/> Jumlah penduduk ${this.series.name}: ${this.point.y}`
          // }
          //formatter untuk shared tooltip
          shared: true,
          formatter: function () {
            // console.log(this.points);
            return [`<b>Tahun ${this.x}</b><br/>`].concat(
              this.points ? this.points.map(point => {
                return `Jumlah penduduk ${point.series.name}: ${point.y} <br/>`
              }) : 'Kosong pak'
            )
          }
        },
        plotOptions: {
          column: {
            stacking: 'normal',
            // dataLabels: {
            //   enabled: true
            // }
          },
          spline: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [
          {
            name: 'Pria',
            data: [212223, 231223, 231223, 269990, 279990]
          },
          {
            name: 'Wanita',
            data: [212400, 251523, 261623, 279990, 299990]
          }
        ],
        xAxis: {
          title: {
            text: "Tahun"
          },
          categories: ['2018', '2019', '2020', '2021', '2022']
        },
        yAxis: {
          title: {
            text: "Jumlah penduduk"
          }
        }
      },

      anotherChart: {
        chart: { type: 'bar' },
        title: {
          text: 'Fruit Consumption'
        },
        xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
          title: {
            text: 'Fruit eaten'
          }
        },
        series: [{
          name: 'Jane',
          data: [1, 0, 4]
        }, {
          name: 'John',
          data: [5, 7, 3]
        }]
      },

    }
  }

}
</script>