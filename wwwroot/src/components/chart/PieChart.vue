<script>
    import { Doughnut } from 'vue-chartjs'

    export default {
        extends: Doughnut,
        data: () => ({
            chartdata: {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
                datasets: [
                    {
                        label: 'Thu chi năm 2019',
                        backgroundColor: ['green', '#58ACFA', '#FE9A2E', '#D7DF01'],
                        data: [40, 30, 60, 80, 20]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        }),

        mounted() {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>

<style scoped>
</style>