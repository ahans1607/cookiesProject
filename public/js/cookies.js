window.addEventListener("DOMContentLoaded", (event) => {
  document.cookie = "my-cookie=choclate_chip"
  document.cookie = "her-cookie=penut_butter"
  

function setCookie(name, value){
    return document.cookie = `${name}=${value}`
  }

setCookie("ananya_cookie", "doggydoodoo");
setCookie("eddy_cookie", "pigdoodoo");
setCookie("jimmy_cookie", "catdoodoo");


function getCookie(){
  let array = document.cookie.split("; ")
  return array
}

// console.log(getCookie())

function getCookieValue(name){
  let array = getCookie()
  let value = null
  for(let i = 0; i < array.length; i++){
    let element = array[i]
      if(element.includes(name)){
        value = (element.slice(name.length + 1, element.length))
      }

    }
  
return value
  
}

// console.log(getCookieValue("rabbit"));
// console.log(getCookieValue("her-cookie"));
// console.log(getCookieValue("eddy_cookie"));

function deleteCookie(arg){
  let array = getCookie()
  for(let i = 0; i < array.length; i++){
    let element = array[i]
      if(element.includes(arg)){
        array = array.splice(array.indexOf(arg), 1)
      } else {
        console.log("COOKIE NOT FOUND!")
      }

  }
}
console.log(deleteCookie("rabbit"));
console.log(deleteCookie("her-cookie"));
console.log(deleteCookie("eddy_cookie"));

});