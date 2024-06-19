let result={
            "tag": "",
            "free": true,
            "role": false,
            "user": "sdf",
            "email": "sdf@123.com",
            "score": 0,
            "state": "undeliverable",
            "domain": "123.com",
            "reason": "invalid_mailbox",
            "mx_found": true,
            "catch_all": null,
            "disposable": false,
            "smtp_check": false,
            "did_you_mean": " ",
            "format_valid": true
    }

submitbtn.addEventListener("click",async (e)=>{
  e.preventDefault()
    console.log("clicked!")
    resultCont.innerHTML = `<img style="width: 123px;" src="img/loading.svg" alt="">`
   let key ="ema_live_7qQkxCJW2mINGuRHtOlMMVcyFVGM0IwbEl2UoXpR"
let email= document.getElementById("username").value

let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
let res= await fetch(url)
let result= await res.json()
let str=``
for(key of Object.keys(result)){
  if(result[key]!==""&& result[key]!==" ")
    {
    str=str+`<div>${key}:${result[key]}</div>`
    }
}
console.log(str)
resultCont.innerHTML =str
})




   