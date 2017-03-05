    /**
     * Created by CRK on 6/29/16.
     */
   
    //for validating the form.
    function validateForm (which) {
        var x = which.firstName.value;
        var y = which.lastName.value;
        var z = which.emailID.value;
    
        //checks for any blank fields
        if (x=="" || y=="" || z=="") {
            alert("All the fields must be filled out");
            return false;
        }
        //checks for proper regular expression
        var firstReg= /[A-Za-z0-9]/;
        if(!firstReg.test(x)){
            alert('Enter a valid name');
            return false;
        }
        //checks for proper regular expression
        var lastReg= /[A-Za-z0-9]/;
        if(!lastReg.test(y)){
            alert('Enter a valid name');
            return false;
        }
        //checks for proper regular expression
        var emailReg =/[A-Za-z0-9]@[A-Za-z0-9].[A-Za-z]/;
        if(!emailReg.test(z)){
            alert('Please enter a valid email');
            return false;
        }
        //checks for localstorage or cookies and set the required fields into them.
        if(localStorage) {
            for (var i = 0; i < holdSelect.length; i++) {
    
                localStorage.setItem('Fselect' + i, holdSelect[i]);
    
                
            }
            localStorage.setItem('FirstName',x);
            localStorage.setItem('LastName',y);
            localStorage.setItem('EmailID',z);

            if(localStorage.length+1>6){

                for(i=4;i<localStorage.length;i++){

                    localStorage.removeItem('Fselect'+i);
                }
            }


        }else{
    
            //do the same with cookies....
    
            SetCookie('Fselect0', holdSelect[0]);
            SetCookie('Fselect1', holdSelect[1]);
            SetCookie('Fselect2', holdSelect[2]);
    
    
    
    
            SetCookie('FirstName',x);
            SetCookie('LastName',y);
            SetCookie('EmailID',z);
            
            
        }
        //if everything evaluates true goes to the final.html page
        return true;
    }