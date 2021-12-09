const app = document.getElementById('app')
const clocks =[];

const btnAddmore = document.createElement('button')
btnAddmore.classList.add('control')
btnAddmore.innerHTML = 'Add'
btnAddmore.addEventListener('click', () => {
    const clock = new Clock();
    clocks.push(clock)
    app.appendChild(clock.render())
})



const btnStartAll = document.createElement('button');
btnStartAll.classList.add('control')
btnStartAll.innerHTML = 'Start all'
btnStartAll.addEventListener('click',() => {
    clocks.forEach(clock => {
        clock.start();
    })
})

const title = document.createElement('div')
title.classList.add('title')
title.innerHTML = 'CLOCK TIME'

app.appendChild(title)
app.appendChild(btnAddmore);
app.appendChild(btnStartAll)