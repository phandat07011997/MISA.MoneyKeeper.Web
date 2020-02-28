<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        data: () => ({
            chartdata: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Cân đối thu',
                        borderColor: '#FE9A2E',
                        data: [20, 5, 10, 40, 19,15, 7]
                    },
                    {
                        label: 'Cân đối chi',
                        borderColor: 'green',
                        data: [20, 15, 30, 13, 39, 40, 10]
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