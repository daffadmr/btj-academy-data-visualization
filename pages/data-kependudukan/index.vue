<template>
  <div class="container py-4 min-h-[89vh] flex flex-col">
    <div class="flex flex-col gap-5 items-center h-full">
      <nav>
        <ul class="flex flex-wrap justify-center gap-2">
          <li
            class="py-2 px-5 rounded-md hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
            :class="tahun === 2018 ? 'bg-slate-400 text-slate-100' : null" @click="tahun = 2018">Tahun 2018</li>
          <li
            class="py-2 px-5 rounded-md hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
            :class="tahun === 2019 ? 'bg-slate-400 text-slate-100' : null" @click="getPenduduk2019">Tahun 2019
          </li>
          <li
            class="py-2 px-5 rounded-md hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
            :class="tahun === 2020 ? 'bg-slate-400 text-slate-100' : null" @click="getPenduduk2020">Tahun 2020
          </li>
          <li
            class="py-2 px-5 rounded-md hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
            :class="tahun === 2021 ? 'bg-slate-400 text-slate-100' : null" @click="getPenduduk2021">Tahun 2021
          </li>
          <li
            class="py-2 px-5 rounded-md hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
            :class="tahun === 2022 ? 'bg-slate-400 text-slate-100' : null" @click="getPenduduk2022">Tahun 2022
          </li>
          <li
            class="py-2 px-5 rounded-md hover:bg-slate-400 transition-all duration-300 hover:text-slate-100 hover:cursor-pointer"
            :class="tahun === 2023 ? 'bg-slate-400 text-slate-100' : null" @click="getPenduduk2023">Tahun 2023
          </li>
        </ul>
      </nav>

      <highchart class="w-full h-[80vh]" :options="data" v-if="!loading && tahun === 2018" />
      <highchart class="w-full h-[80vh]" :options="data" v-if="!loading && tahun === 2019" />
      <highchart class="w-full h-[80vh]" :options="data" v-if="!loading && tahun === 2020" />
      <highchart class="w-full h-[80vh]" :options="data" v-if="!loading && tahun === 2021" />
      <highchart class="w-full h-[80vh]" :options="data" v-if="!loading && tahun === 2022" />
      <highchart class="w-full h-[80vh]" :options="data" v-if="!loading && tahun === 2023" />

      <div v-if="loading" class="py-52"><img src="https://i.gifer.com/ZKZg.gif" alt="" width="50"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: {},
      loading: true,
      tahun: 2018,
    }
  },
  mounted() {
    this.getPenduduk2018()
  },
  methods: {
    async getPenduduk2018() {
      const data = await fetch('https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2018')
      const dataToJson = await data.json()
      this.items = { ...this.items, "tahun_2018": dataToJson.data }

      this.loading = false
    },
    async getPenduduk2019() {
      this.tahun = 2019
      if (!this.items.tahun_2019) {
        this.loading = true
        const data = await fetch('https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2019')
        const dataToJson = await data.json()
        this.items = { ...this.items, "tahun_2019": dataToJson.data }

        this.loading = false
      }

    },
    async getPenduduk2020() {
      this.tahun = 2020
      if (!this.items.tahun_2020) {
        this.loading = true
        const data = await fetch('https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2020')
        const dataToJson = await data.json()
        this.items = { ...this.items, "tahun_2020": dataToJson.data }

        this.loading = false
      }
    },
    async getPenduduk2021() {
      this.tahun = 2021
      if (!this.items.tahun_2021) {
        this.loading = true
        const data = await fetch('https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2021')
        const dataToJson = await data.json()
        this.items = { ...this.items, "tahun_2021": dataToJson.data }

        this.loading = false
      }
    },
    async getPenduduk2022() {
      this.tahun = 2022
      if (!this.items.tahun_2022) {
        this.loading = true
        const data = await fetch('https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2022')
        const dataToJson = await data.json()
        this.items = { ...this.items, "tahun_2022": dataToJson.data }

        this.loading = false
      }
    },
    async getPenduduk2023() {
      this.tahun = 2023
      if (!this.items.tahun_2023) {
        this.loading = true
        const data = await fetch('https://api-e-database.kemendagri.go.id/api/dukcapil_jumlah_penduduk_prov/51F890E2DF?tahun=2023')
        const dataToJson = await data.json()
        this.items = { ...this.items, "tahun_2023": dataToJson.data }

        this.loading = false
      }
    }
  },
  computed: {
    pendudukDinamis() {
      if (this.tahun === 2018) {
        return this.jumlah_penduduk_2018
      } else if (this.tahun === 2019) {
        return this.jumlah_penduduk_2019
      } else if (this.tahun === 2020) {
        return this.jumlah_penduduk_2020
      } else if (this.tahun === 2021) {
        return this.jumlah_penduduk_2021
      } else if (this.tahun === 2022) {
        return this.jumlah_penduduk_2022
      } else if (this.tahun === 2023) {
        return this.jumlah_penduduk_2023
      } else {
        return null
      }
    },
    provinsiDinamis() {
      if (this.tahun === 2018) {
        return this.provinsi_2018
      } else if (this.tahun === 2019) {
        return this.provinsi_2019
      } else if (this.tahun === 2020) {
        return this.provinsi_2020
      } else if (this.tahun === 2021) {
        return this.provinsi_2021
      } else if (this.tahun === 2022) {
        return this.provinsi_2022
      } else if (this.tahun === 2023) {
        return this.provinsi_2023
      } else {
        return null
      }
    }
    ,
    data() {
      return {
        chart: {
          type: 'column'
        },
        title: {
          text: "Chart Jumlah Penduduk Provinsi Indonesia"
        },
        subtitle: {
          text: `${this.tahun}`
        },
        legend: {
          align: 'right',
          verticalAlign: 'top',
          layout: 'horizontal'
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
            name: 'Jumlah Penduduk',
            data: this.pendudukDinamis,
          },
        ],
        xAxis: {
          title: {
            text: "Provinsi"
          },
          categories: this.provinsiDinamis
        },
        yAxis: {
          title: {
            text: "Jumlah Penduduk"
          },
        }
      }
    },
    jumlah_penduduk_2018() {
      let jumlahPenduduk2018 = []
      this.items.tahun_2018?.map(item => {
        jumlahPenduduk2018.push(parseInt(item.jumlah_penduduk))
      })
      return jumlahPenduduk2018
    },
    provinsi_2018() {
      let provinsi2018 = []
      this.items.tahun_2018?.map(item => {
        provinsi2018.push(item.prov)
      })
      return provinsi2018
    },
    jumlah_penduduk_2019() {
      let jumlahPenduduk2019 = []
      this.items.tahun_2019?.map(item => {
        jumlahPenduduk2019.push(parseInt(item.jumlah_penduduk))
      })
      return jumlahPenduduk2019
    },
    provinsi_2019() {
      let provinsi2019 = []
      this.items.tahun_2019?.map(item => {
        provinsi2019.push(item.prov)
      })
      return provinsi2019
    },
    jumlah_penduduk_2020() {
      let jumlahPenduduk2020 = []
      this.items.tahun_2020?.map(item => {
        jumlahPenduduk2020.push(parseInt(item.jumlah_penduduk))
      })
      return jumlahPenduduk2020
    },
    provinsi_2020() {
      let provinsi2020 = []
      this.items.tahun_2020?.map(item => {
        provinsi2020.push(item.prov)
      })
      return provinsi2020
    },
    jumlah_penduduk_2021() {
      let jumlahPenduduk2021 = []
      this.items.tahun_2021?.map(item => {
        jumlahPenduduk2021.push(parseInt(item.jumlah_penduduk))
      })
      return jumlahPenduduk2021
    },
    provinsi_2021() {
      let provinsi2021 = []
      this.items.tahun_2021?.map(item => {
        provinsi2021.push(item.prov)
      })
      return provinsi2021
    },
    jumlah_penduduk_2022() {
      let jumlahPenduduk2022 = []
      this.items.tahun_2022?.map(item => {
        jumlahPenduduk2022.push(parseInt(item.jumlah_penduduk))
      })
      return jumlahPenduduk2022
    },
    provinsi_2022() {
      let provinsi2022 = []
      this.items.tahun_2022?.map(item => {
        provinsi2022.push(item.prov)
      })
      return provinsi2022
    },
    jumlah_penduduk_2023() {
      let jumlahPenduduk2023 = []
      this.items.tahun_2023?.map(item => {
        jumlahPenduduk2023.push(parseInt(item.jumlah_penduduk))
      })
      return jumlahPenduduk2023
    },
    provinsi_2023() {
      let provinsi2023 = []
      this.items.tahun_2023?.map(item => {
        provinsi2023.push(item.prov)
      })
      return provinsi2023
    },
  }
}
</script>