window.onload = function () {
    let queryString = document.location.search;
    let params = queryString.substring(1);
    let index = params.indexOf("&");
    let pid = params.substring(0, index);
    let a = pid.indexOf("=");
    pid = +pid.substring(a+1);
    let lid = params.substring(index+1);
    let b = lid.indexOf("=");
    lid = +lid.substring(b+1);
    let inputs = document.querySelectorAll('.hidden-input input');
    inputs[0].value = pid;
    inputs[1].value = lid;
}