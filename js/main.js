window.onload = function () {
    let queryString = document.location.search;
    queryString = queryString.replace('?','').split('&');
    let obj = queryString.reduce(
        function(p,curr){
            let aa = curr.split('=');
            p[decodeURIComponent(aa[0])] = decodeURIComponent(aa[1]);
            return p;
        },
        {}
    )
    let inputs = document.querySelectorAll('.hidden-input input');
    inputs[0].value = obj.pid;
    inputs[1].value = obj.lid;
}