
export const lineLegends = [
  { title: 'Температура', color: 'bg-teal-600' },
  { title: 'Влажность', color: 'bg-purple-600' },
]

export const lineOptions = {
  data: {
    labels: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    datasets: [
      {
        label: 'Температура',
        backgroundColor: '#0694a2',
        borderColor: '#0694a2',
        data: [25, 25, 25, 29, 27, 30, 32],
        fill: false,
      },
      {
        label: 'Влажность',
        fill: false,
        backgroundColor: '#7e3af2',
        borderColor: '#7e3af2',
        data: [30, 35, 28, 35, 55, 40, 60],
      },
    ],
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      x: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Day of week',
        },
      },
      y: {
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Value',
        },
      },
    },
  },
  legend: {
    display: false,
  },
}