$(document).ready(function(){  
    $('#spin').click(function(){runAll();});    
    $("#msg").text("Click the 'SPIN NOW' button");
    $("#spin").text("Spin Again");
  

    function runAll(){
        removeClass();
        one(); 
        two(); 
        three();
        display();
    }
    
    function removeClass(){
        $("#one").removeClass();
        $("#two").removeClass();
        $("#three").removeClass();
    }
    
    function display()
    {
        if ($("#one").hasClass("red") && ($("#two").hasClass("red")) && ($("#three").hasClass("red")))
        {
            $("#msg").text("Congratulations, you won!");
        }
        else if ( $("#one").hasClass("blue") && ($("#two").hasClass("blue")) && ($("#three").hasClass("blue")))
        {
            $("#msg").text("Congratulations, you won!");  
        }
        else if( $("#one").hasClass("green") && ($("#two").hasClass("green")) && ($("#three").hasClass("green")))
        {
            $("#msg").text("Congratulations, you won!");
        }
        else
        {
            $("#msg").text("Sorry, try again");  
        }
    }

    function one()
    {
        var randomNum = Math.floor(Math.random() * 10)
        while(randomNum == 0 || randomNum > 3){
            randomNum = Math.floor(Math.random() * 10)
        }
        if( randomNum == 1 )
        {
            $("#one").addClass("red");
        }
        else if(randomNum == 2)
        {
            $("#one").addClass("blue");
        }
        else if(randomNum == 3)
        {
            $("#one").addClass("green");
        }
        else
        {
        
        }
    }   
    
    
    function two()
    {
        var randomNum = Math.floor(Math.random() * 10)
        while (randomNum == 0 || randomNum > 3)
        {
         randomNum = Math.floor(Math.random() * 10)
        }
        if( randomNum == 1 )
        {
         $("#two").addClass("red");
        }
        else if(randomNum == 2)
        {
         $("#two").addClass("blue");
        }
        else if(randomNum == 3)
        {
            $("#two").addClass("green");
        }
        else{
        
        }
}   
       
      function three()
{
          var randomNum = Math.floor(Math.random() * 10)
          while (randomNum == 0 || randomNum > 3)
        {
          randomNum = Math.floor(Math.random() * 10)
        }
       if( randomNum == 1 )
       {
        $("#three").addClass("red");
         }else if(randomNum == 2)
        {
        $("#three").addClass("blue");
        }else if(randomNum == 3)
       {
        $("#three").addClass("green");
       }else{
        
        }
    
}
    
    
});
 
  
