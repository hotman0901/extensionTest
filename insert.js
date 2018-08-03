var s = document.createElement('style');
var keyframes = `@keyframes spin
{
    0%
    {
        transform: translateY(100%);
    }
    25%
    {
        transform: translateY(-25%);
    }
    50%
    {
        transform: translateY(-50%);
    }
    75%
    {
        transform: translateY(-25%);
    }
    100%
    {
        transform: translateY(100%);
    }
};`

s.innerHTML = keyframes;
document.getElementsByTagName('head')[0].appendChild(s);


var elem = document.createElement('img');
elem.setAttribute('src', 'http://bpic.588ku.com/element_pic/00/84/54/3456e7b9c33b862.jpg');

elem.setAttribute("style", "z-index: 99; width: 50x; height: 50px; position: fixed; bottom: 0; left: 25%; animation: spin .2s linear infinite;");
document.body.appendChild(elem);


