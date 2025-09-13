import './style.css'

let twelveHrsFormat: boolean = false;
const format = document.querySelector('.twelveHours') as HTMLInputElement;
format.addEventListener('change', (event)=>{
  const checkbox = event.target as HTMLInputElement;
  if(checkbox.checked) twelveHrsFormat = true;
  else twelveHrsFormat = false;
})

const updateTime = () => {
  const date: Date = new Date();

  const hrsDisplay = document.querySelector('#hrs') as HTMLDivElement;
  if(twelveHrsFormat && date.getHours() > 12) hrsDisplay.innerHTML=`${date.getHours()-12}`;
  else hrsDisplay.innerHTML=`${date.getHours()}`;

  const minsDisplay = document.querySelector('#mins') as HTMLDivElement;
  minsDisplay.innerHTML=`${date.getMinutes()}`;

  const secsDisplay = document.querySelector('#secs') as HTMLDivElement;
  secsDisplay.innerHTML = `${date.getSeconds()}`;
}

setInterval(updateTime, 1000);

updateTime();