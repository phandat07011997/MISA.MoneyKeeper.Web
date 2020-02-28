<script>
    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        data: () => ({
            chartdata: {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                datasets: [
                    {
                        label: 'Thu năm 2020',
                        backgroundColor: 'green',
                        data: [40, 100, 60, 80, 30, 30, 55, 45, 35, 80, 66, 80, 120]
                    },
                    {
                        label: 'Chi năm 2019',
                        backgroundColor: 'red',
                        data: [20, 30, 10, 80, 30, 30, 55, 45, 35, 80, 66, 80, 120]
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