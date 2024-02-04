<template>
  <div class="container">
    <div class="grid gap-2">
      <div class="rounded-md shadow-md">
        <highchart :options="chartMultipleAxisOptions" />
      </div>
      <div class="rounded-md shadow-md">
        <highchart :options="chartOptionsAdvance" />
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
      chartMultipleAxisOptions: {
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
        plotOptions: {
          spline: {
            dataLabels: {
              enabled: false
            }
          }
        },
        tooltip: {
          split: true
        },
        series: [
          {
            name: 'Temperature',
            type: 'column',
            data: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
            yAxis: 0,
            tooltip: {
              valueSuffix: '°C'
            }
          },
          {
            name: 'Kelembapan udara',
            type: 'spline',
            data: [15, 26, 37, 63, 49, 50, 21, 50, 73, 50, 85, 96],
            yAxis: 1,
            tooltip: {
              valueSuffix: '%'
            },
            marker: {
              enabled: false
            },
            dashStyle: 'shortdot'
          },
          {
            name: 'Kecepatan Angin',
            type: 'spline',
            data: [12, 14, 13, 27, 34, 23, 40, 19, 32, 23, 21, 50],
            yAxis: 2,
            tooltip: {
              valueSuffix: ' km/h'
            }
          }
        ],
        xAxis: {
          title: {
            text: "Bulan"
          },
          categories: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
        },
        yAxis: [
          {
            title: {
              text: "Temperature"
            },
            labels: {
              format: '{value}°C'
            }
          },
          {
            title: {
              text: 'Kelembapan Udara'
            },
            labels: {
              format: '{value}%'
            }
          },
          {
            title: {
              text: 'Kecepatan angin'
            },
            labels: {
              format: '{value} km/h'
            },
            opposite: true
          },
        ]
      },
      chartOptionsAdvance: {
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
          // shared: true,
          // formatter: function () {
          //   // console.log(this.points);
          //   return [`<b>Tahun ${this.x}</b><br/>`].concat(
          //     this.points ? this.points.map(point => {
          //       return `Jumlah penduduk ${point.series.name}: <b>${point.y}</b> <br/>`
          //     }) : 'Kosong pak'
          //   )
          // }
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
            data: [70, 80, 120, 125, 122],
            type: 'column'
          },
          {
            name: 'Wanita',
            data: [75, 88, 130, 145, 152],
            type: 'column'
          },
          {
            name: 'Rata-rata',
            data: [72.5, 84, 125, 135, 137],
            type: 'line',
            step: 'center'
          },
          {
            name: 'Total',
            type: 'pie',
            size: 120,
            dataLabels: {
              enabled: false
            },
            center: [50, 44],
            data: [
              {
                name: 'Pria',
                y: 517
              },
              {
                name: 'Wanita',
                y: 590
              }
            ]
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
          },
          labels: {
            format: '{value} Orang'
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