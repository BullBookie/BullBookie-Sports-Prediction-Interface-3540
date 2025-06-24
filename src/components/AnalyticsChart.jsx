import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const AnalyticsChart = ({ type, data, title, height = 300 }) => {
  const getChartOptions = () => {
    const baseOptions = {
      backgroundColor: 'transparent',
      textStyle: {
        color: '#C0C0C0'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      }
    };

    switch (type) {
      case 'line':
        return {
          ...baseOptions,
          title: {
            text: title,
            textStyle: { color: '#D40934', fontSize: 16, fontWeight: 'bold' }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#212121',
            borderColor: '#D40934',
            textStyle: { color: '#FFFFFF' }
          },
          xAxis: {
            type: 'category',
            data: data.labels,
            axisLine: { lineStyle: { color: '#2A3132' } },
            axisLabel: { color: '#C0C0C0' }
          },
          yAxis: {
            type: 'value',
            axisLine: { lineStyle: { color: '#2A3132' } },
            axisLabel: { color: '#C0C0C0' },
            splitLine: { lineStyle: { color: '#2A3132' } }
          },
          series: [{
            data: data.values,
            type: 'line',
            smooth: true,
            lineStyle: { color: '#D40934', width: 3 },
            itemStyle: { color: '#D40934' },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: 'rgba(212, 9, 52, 0.3)' },
                  { offset: 1, color: 'rgba(212, 9, 52, 0.05)' }
                ]
              }
            }
          }]
        };

      case 'bar':
        return {
          ...baseOptions,
          title: {
            text: title,
            textStyle: { color: '#D40934', fontSize: 16, fontWeight: 'bold' }
          },
          tooltip: {
            trigger: 'axis',
            backgroundColor: '#212121',
            borderColor: '#D40934',
            textStyle: { color: '#FFFFFF' }
          },
          xAxis: {
            type: 'category',
            data: data.labels,
            axisLine: { lineStyle: { color: '#2A3132' } },
            axisLabel: { color: '#C0C0C0' }
          },
          yAxis: {
            type: 'value',
            axisLine: { lineStyle: { color: '#2A3132' } },
            axisLabel: { color: '#C0C0C0' },
            splitLine: { lineStyle: { color: '#2A3132' } }
          },
          series: [{
            data: data.values,
            type: 'bar',
            itemStyle: {
              color: {
                type: 'linear',
                x: 0, y: 0, x2: 0, y2: 1,
                colorStops: [
                  { offset: 0, color: '#D40934' },
                  { offset: 1, color: '#B8072B' }
                ]
              }
            },
            emphasis: {
              itemStyle: { color: '#E63A5A' }
            }
          }]
        };

      case 'pie':
        return {
          ...baseOptions,
          title: {
            text: title,
            textStyle: { color: '#D40934', fontSize: 16, fontWeight: 'bold' }
          },
          tooltip: {
            trigger: 'item',
            backgroundColor: '#212121',
            borderColor: '#D40934',
            textStyle: { color: '#FFFFFF' },
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: { color: '#C0C0C0' }
          },
          series: [{
            name: title,
            type: 'pie',
            radius: '50%',
            data: data.map((item, index) => ({
              ...item,
              itemStyle: {
                color: ['#D40934', '#FAD109', '#E63A5A', '#FBD73D', '#B8072B'][index % 5]
              }
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(212, 9, 52, 0.5)'
              }
            }
          }]
        };

      case 'radar':
        return {
          ...baseOptions,
          title: {
            text: title,
            textStyle: { color: '#D40934', fontSize: 16, fontWeight: 'bold' }
          },
          tooltip: {
            backgroundColor: '#212121',
            borderColor: '#D40934',
            textStyle: { color: '#FFFFFF' }
          },
          radar: {
            indicator: data.indicators,
            axisLine: { lineStyle: { color: '#2A3132' } },
            splitLine: { lineStyle: { color: '#2A3132' } },
            axisLabel: { color: '#C0C0C0' }
          },
          series: [{
            type: 'radar',
            data: [{
              value: data.values,
              name: 'Performance',
              itemStyle: { color: '#D40934' },
              areaStyle: { color: 'rgba(212, 9, 52, 0.2)' },
              lineStyle: { color: '#D40934', width: 2 }
            }]
          }]
        };

      default:
        return baseOptions;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-bull-gray rounded-bull p-6 border border-bull-charcoal shadow-bull"
    >
      <ReactECharts
        option={getChartOptions()}
        style={{ height: `${height}px` }}
        opts={{ renderer: 'canvas' }}
      />
    </motion.div>
  );
};

export default AnalyticsChart;