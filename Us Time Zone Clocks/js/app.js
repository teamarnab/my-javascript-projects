// India time 
let timeIndia = function () {
    date_here = document.getElementById('time-india')
date_here.innerHTML = new Date().toLocaleString("en-US", {
    timeZone: 'Asia/Kolkata',
    timeStyle: 'medium',
    hourCycle: 'h12',
    dateStyle: "full"
})
};

setInterval(timeIndia, 1000)

// Est time
let time_est = function () {
    date_here = document.getElementById('time-est')
date_here.innerHTML = new Date().toLocaleString("en-US", {
    timeZone: 'America/New_York',
    timeStyle: 'medium',
    hourCycle: 'h12',
    dateStyle: "full"
})
};

setInterval(time_est, 1000)


// Cst time
let time_cst = function () {
    date_here = document.getElementById('time-cst')
date_here.innerHTML = new Date().toLocaleString("en-US", {
    timeZone: 'America/Chicago',
    timeStyle: 'medium',
    hourCycle: 'h12',
    dateStyle: "full"
})
};

setInterval(time_cst, 1000)


// Mst time
let time_mst = function () {
    date_here = document.getElementById('time-mst')
date_here.innerHTML = new Date().toLocaleString("en-US", {
    timeZone: 'America/Denver',
    timeStyle: 'medium',
    hourCycle: 'h12',
    dateStyle: "full"
})
};

setInterval(time_mst, 1000)

// // Pst time
let time_pst = function () {
    date_here = document.getElementById('time-pst')
date_here.innerHTML = new Date().toLocaleString("en-US", {
    timeZone: 'America/Los_Angeles',
    timeStyle: 'medium',
    hourCycle: 'h12',
    dateStyle: "full"
})
};

setInterval(time_pst, 1000)
