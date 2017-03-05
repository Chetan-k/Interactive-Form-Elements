
    /**
     * Created by CRK on 6/17/16.
     */

    //for holding all select options.
    var holdSelect = [];

    //main function
    function init(dom) {
        //is this the first time?

        var mainDiv = document.createElement('div');
        mainDiv.setAttribute('id', 'main');

        //checks it for the first time for first select button
        if (dom == 'firstSelect') {
            var holdData = data[dom];

            //holdData holds: ['Dish type','Indian','Chinese','Mexican','Italian']
        } else {

            //coming back again after selecting option in first select.

            var holdData = data[dom.value];
            
            //for storing all of my select options
            holdSelect = holdSelect.concat(dom.value);

            //removes the selects if the user changes the options in previous selects'

            while (dom.parentNode != dom.parentNode.parentNode.lastChild) {
                dom.parentNode.parentNode.removeChild(dom.parentNode.parentNode.lastChild);
            }
            //for removing image when options change
            if (parseInt(document.getElementById('image').style.top) > 0) {
                //put back to 0
                document.getElementById('image').style.top = -200 + 'px';
                while (document.getElementById('image').childNodes.length != 0) {
                    //kill any children if exists
                    document.getElementById('image').removeChild(document.getElementById('image').firstChild);
                }
            }

            //for removing form when options change

            if (parseInt(document.getElementById('form').style.left) > 0) {
                //put back to 0
                document.getElementById('form').style.left = -200 + 'px';
                while (document.getElementById('form').childNodes.length != 0) {
                    //kill any children if exists
                    document.getElementById('form').removeChild(document.getElementById('form').firstChild);
                }
            }


        }

        //holdData is going to be the 'other' side of the data object.
        //creating the question tag and select options.

        if (holdData[0] !== null) {

            var hEle = document.createElement('h3');
            hEle.setAttribute('style', "color:#5F3A65;font-family: 'Comic sans ms',sans-serif");
            var textNode = document.createTextNode(holdData[0]);
            hEle.appendChild(textNode);
            document.getElementById('styleSelect').appendChild(hEle);

            var select = document.createElement('select');
            select.setAttribute('id', holdData[1]);
			
			if(IE7){
				 select.setAttribute('onchange',function(){init(this);});
			}else{
            select.setAttribute('onchange', 'init(this);');
			}
			
            select.setAttribute('name', holdData[1]);
            for (var i = 1; i < holdData.length; i++) {
                var option = document.createElement('option');
                option.setAttribute('value', holdData[i]);

                var text = document.createTextNode(holdData[i]);
                option.appendChild(text);
                select.appendChild(option);

            }
            mainDiv.appendChild(select);
            document.getElementById('styleSelect').appendChild(mainDiv);


        } else {


            //If holdData[0]=null then all select options are done and then creates the image element based on the selections.

            var mainDiv1 = document.createElement('div');
            mainDiv1.setAttribute('id', 'main1');

            var image = document.createElement('img');
            image.setAttribute('src', holdData[1]);
            image.setAttribute('id', 'images');
            image.setAttribute('alt', 'Dish Image');
            image.setAttribute('width', '300');
            image.setAttribute('height', '300');
            mainDiv1.appendChild(image);
            document.getElementById('image').appendChild(mainDiv1);
			
			image1();

          //A self called function for movement of the image div-->DHTML.
		  function image1(){
            (function moveIt() {
                var imgMove = document.getElementById('image');
                if (parseInt(imgMove.style.top) < 150) {
                    imgMove.style.top = parseInt(imgMove.style.top) + 6 + 'px';
                    setTimeout(function() {
                        moveIt();
                    }, 40);
                }
            })();
		  }


            // creating a form
            var formEle = document.createElement('form');
            formEle.setAttribute('name', 'formss');
            formEle.setAttribute('action', 'final.html');
            formEle.setAttribute('method', 'post');
            formEle.setAttribute('onsubmit', 'return validateForm(this)');

            //creating h3 tag
            var h3tag = document.createElement('h3');
            var h3text = document.createTextNode('Please enter your details');
            h3tag.appendChild(h3text);
            formEle.appendChild(h3tag);

            //creating firstname of the form
            var fname = document.createElement('label');
            fname.setAttribute('style','padding-right:25px');
            var ftnode = document.createTextNode('First Name:');
            fname.appendChild(ftnode);
            formEle.appendChild(fname);
            var finput = document.createElement('input');
            finput.setAttribute('type', 'text');
            finput.setAttribute('style',"padding-left:10px;color: #5F3A65;font-family:'Comic sans ms',sans-serif");
            //checks for localstorage or cookies and set the value of the firstname if exists
            if (localStorage) {

                var loc = localStorage.getItem('FirstName');
                if(loc==null ){
                    finput.setAttribute('value','');
                }else {
                    finput.setAttribute('value', loc);
                }

            } else {

                var cooks = GetCookie('FirstName');
                finput.setAttribute('value', cooks);

            }

            finput.setAttribute('name', 'firstName');
            formEle.appendChild(finput);

            //Line break
            var brkEle = document.createElement('br');
            formEle.appendChild(brkEle);

            //creating Lastname of the form
            var lname = document.createElement('lable');
            lname.setAttribute('style','padding-right:29px');
            var ltnode = document.createTextNode('Last Name:');
            lname.appendChild(ltnode);
            formEle.appendChild(lname);
            var linput = document.createElement('input');
            linput.setAttribute('type', 'text');
            linput.setAttribute('style',"padding-left:10px;color: #5F3A65;font-family:'Comic sans ms',sans-serif");
            // //checks for localstorage or cookies and set the value of the lastname if exists
            if (localStorage) {

                var loc = localStorage.getItem('LastName');

                if(loc==null ){
                    finput.setAttribute('value','');
                }else {
                    linput.setAttribute('value', loc);
                }

            } else {

                var cook = GetCookie('LastName');
                linput.setAttribute('value', cook);
            }
            linput.setAttribute('name', 'lastName');
            formEle.appendChild(linput);

            //line break
            var brkEle1 = document.createElement('br');
            formEle.appendChild(brkEle1);

            //creating Email ID of the form
            var emailid = document.createElement('label');
            emailid.setAttribute('style','padding-right:42px');
            var etnode = document.createTextNode('Email ID:');
            emailid.appendChild(etnode);
            formEle.appendChild(emailid);
            var einput = document.createElement('input');
            einput.setAttribute('type', 'text');
            einput.setAttribute('style',"padding-left:10px;color: #5F3A65;font-family:'Comic sans ms',sans-serif");
            //checks for localstorage or cookies and set the value of the emainId if exists
            if (localStorage) {

                var loc = localStorage.getItem('EmailID');
                if(loc==null ){
                    finput.setAttribute('value','');
                }else {
                    einput.setAttribute('value', loc);
                }

            } else {

                var cook = GetCookie('EmailID');
                einput.setAttribute('value', cook);
            }
            einput.setAttribute('name', 'emailID');
            formEle.appendChild(einput);

            //line break
            var brkEle2 = document.createElement('br');
            formEle.appendChild(brkEle2);

            //creating submit button of form
            var butt = document.createElement('input');
            butt.setAttribute('style',"background-color:#9DC1A8;width:80px;font-family:'skolar sans latin'");
            butt.setAttribute('type', 'submit');
            butt.setAttribute('value', 'Submit!');

            if(IE7){
                butt.setAttribute('onclick',function(){validateForm(this);});
            }else{
                butt.setAttribute('onclick', 'validateForm(this);');
            }
            
            formEle.appendChild(butt);

            //Attaching all the above created form elements to the div tag
            var formDiv = document.createElement('div');
            formDiv.setAttribute('id', 'forms');
            formDiv.setAttribute('style', "width:400px;height:150px;border:none;box-shadow:0px 0px 3px grey;");
            formDiv.appendChild(formEle);
            document.getElementById('form').appendChild(formDiv);

            //for movement of the form-not working
            (function moveIt() {
                var imgMove = document.getElementById('form');
                if (parseInt(imgMove.style.left) < 300) {
                    imgMove.style.left = parseInt(imgMove.style.left) + 6 + 'px';
                    setTimeout(function() {
                        moveIt();
                    }, 40);
                }
            })();
        }
    }

   