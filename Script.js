function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
       return ele;
    }
    function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3,attrname4,attrvalue4){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    ele1.setAttribute(attrname3,attrvalue3);
    ele1.setAttribute(attrname4,attrvalue4);
    return ele1;
    }
    
    function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
     }
     var FN=labels("label","for","firstName","First Name");
     var br=linebreak("br");
     var input=inputs("input","type","firstName","name","FirstName","id","firstName");
     var br1=linebreak("br");
     var MN=labels("label","for","middleName","Middle Name");
     var br2=linebreak("br");
     var input1=inputs("input","type","middleName","name","MiddleName","id","MiddleName");
     var br3=linebreak("br");
     var LN=labels("label","for","lastName","Last Name");
     var br4=linebreak("br");
     var input2=inputs("input","type","lastName","name","LastName","id","LastName");
     var br5=linebreak("br");
     var email=labels("label","for","email","Email");
     var br6=linebreak("br");
     var input3=inputs("input","type","email","name","Email","id","email");
     var br7=linebreak("br");
     var pass=labels("label","for","password","Password");
     var br8=linebreak("br");
     var input4=inputs("input","type","password","name","Password","id","password");
     

    
    
     document.body.append(FN,br,input,br1,MN,br2,input1,br3,LN,br4,input2,br5,email,br6,input3,br7,pass,br8,input4);