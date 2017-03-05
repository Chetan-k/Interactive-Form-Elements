/**
 * Created by CRK on 6/29/16.
 */

//checks for localstorage or cookies and gets the required fields from the froms and selected options.
function  populate() {

    if (localStorage) {
        var a = localStorage.getItem('Fselect0');
        var b = localStorage.getItem('Fselect1');
        var c = localStorage.getItem('Fselect2');
        var d = localStorage.getItem('FirstName');
        var h3Ele = document.createElement('h3');
        h3Ele.setAttribute('style', "color:#916838;font-family: 'Comic sans ms',sans-serif; margin-left: 40px")
        var h3Txt = document.createTextNode('Hello '+d+', you are interested in '+c+', '+a+' dish from '+b+' restaurant.');
        h3Ele.appendChild(h3Txt);
        h3Ele.appendChild(document.createElement('br'));
        document.getElementsByTagName('body')[0].appendChild(h3Ele);
    }else{
        var a = GetCookie('Fselect0');
        var b= GetCookie('Fselect1');
        var c= GetCookie('Fselect2');
        var d= GetCookie('FirstName');

        var h3Ele = document.createElement('h3');
        h3Ele.setAttribute('style', "color:#916838;font-family: 'Comic sans ms',sans-serif; margin-left: 40px")
        var h3Txt = document.createTextNode('Hello '+d+', you are interested in '+c+', '+a+' dish from '+b+' restaurant.');
        h3Ele.appendChild(h3Txt);
        h3Ele.appendChild(document.createElement('br'));
        document.getElementsByTagName('body')[0].appendChild(h3Ele);
    }
}
