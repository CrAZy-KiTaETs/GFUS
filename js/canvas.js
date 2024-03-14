const ctx = document.getElementById('myChart');

ctx.addEventListener('click', () => {
    console.log('nice')
})

new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Комунисты', 'Пидорасы'],
      datasets: [{
        label: 'XYU of Votes',
        data: [70, 30],
        backgroundColor: [
            'red', 'skyBlue'
        ],
        borderWidth: 1,
        borderColor: 'black',
        hoverBackgroundColor: 'black'
      }]
    }
  });