const button = document.getElementById('button');
const input = document.getElementById('input');
const span = document.getElementById('span');
const err = document.getElementById('err');





async function getDateFromApi() {
    let gregorianDate = input.value.split("-");
    if(gregorianDate.length === 3){
        axios.get(`https://www.hebcal.com/converter?cfg=json&gy=${gregorianDate[0]}&gm=${gregorianDate[1]}&gd=${gregorianDate[2]}&g2h=1`).then(res => { 
            console.log(res);
            span.innerHTML = res.data.hebrew;
            err.innerHTML = ""

        }).catch(error => console.error("error:", error));
    
    }else{
        err.innerHTML = "יש לבחור תאריך"
    }

}

button.addEventListener('click', async () => {
    getDateFromApi();
});
