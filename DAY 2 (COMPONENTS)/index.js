let second=0;
let timeInterval = null;

document.getElementById("btnStart").addEventListener('click',()=>{
    timeInterval=setInterval(()=>{
        second++;
        const time = formatSecond(second);
        document.getElementById('time').innerHTML=time;
    },1000);
)

document.getElementById('btnPause').addEventListener('click',()=>{
    if(timeInterval{
        clearInterval(timeInterval)

    }
    ))

document.getElementById('btnStop').addEventListener('click',()=>{
    if(timeInterval){
        clearInterval(timeInterval)
    }
    second = 0
    document.getElementById('time').innerHTML = formatSecond('seconds')
})

function formatSecond(second){
    const m = Math.floor(seconds/60)
    const s = second % 60;
    return m + " : " + s;
}