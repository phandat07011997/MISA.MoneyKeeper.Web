<template>
    <div class="home border shadow">
        <div class="chart">
            <div class="bar-chart chart-item">
                <bar-chart></bar-chart>
            </div>
            
            <div class="scatter-chart chart-item">
                <scatter-chart></scatter-chart>
            </div>
        </div>
        <div class="chart">
            <div class="radar-chart chart-item">
                <radar-chart></radar-chart>
            </div>
            <div class="pie-chart chart-item">
                <pie-chart></pie-chart>
            </div>
        </div>
    </div>

</template>
<script>
    import BarChart from '@/components/chart/BarChart.vue';
    import PieChart from '@/components/chart/PieChart.vue';
    import RadarChart from '@/components/chart/RadarChart.vue';
    import ScatterChart from '@/components/chart/ScatterChart.vue';
    export default {
        name: 'home',
        data() {
            return {

            }
        },
        components: {
            BarChart,
            PieChart,
            RadarChart,
            ScatterChart
        }


    }
</script>

<style lang="scss">
    @import '../assets/css/views/home.scss';
    .chart{
        width:90%;
        max-width:1500px;
        margin:auto;
        height:50%;
        padding-top:30px;
        display: flex;
        justify-content: space-between;
    }
    .chart-item{
        width:50%;
        height:100%;
    }
</style>