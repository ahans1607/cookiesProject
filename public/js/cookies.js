window.addEventListener("DOMContentLoaded", (event) => {
  document.cookie = "my-cookie=choclate_chip"
  document.cookie = "her-cookie=penut_butter"
  

function setCookie(name, value){
    return document.cookie = `${name}=${value}`
  }

setCookie("ananya_cookie", "doggydoodoo");

});
