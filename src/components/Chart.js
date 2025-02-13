import React, { useRef, useEffect } from 'react'; 
import * as d3 from 'd3';

const Chart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = [30, 86, 168, 281, 303, 365];

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', 400)
      .attr('height', 300);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 70)
      .attr('y', d => 300 - d)
      .attr('width', 65)
      .attr('height', d => d)
      .attr('fill', 'teal');
  }, []);

  return <div ref={chartRef}></div>;
};

export default Chart;