const ajax = new XMLHttpRequest()
ajax.open("GET","https://ipapi.co/json/")
ajax.send()
ajax.onload=function(){
    document.write(ajax.responseText)
}
ajax.onerror=function(err){
    console.log(err)
}