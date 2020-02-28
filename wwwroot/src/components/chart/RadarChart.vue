<script>
    import { Radar } from 'vue-chartjs'

    export default {
        extends: Radar,
        data: () => ({
            chartdata: {
                labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
                datasets: [
                    {
                        label: 'Chi năm 2020',
                        borderColor: 'green',
                        data: [40, 100, 60, 80, 30, 30, 55, 45, 35, 80, 66, 80, 120]
                    },
                    {
                        label: 'Thu năm 2020',
                        borderColor: '#F78181',
                        data: [110, 70, 100, 20, 125, 120, 90, 87, 85, 80, 65, 100, 150]
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