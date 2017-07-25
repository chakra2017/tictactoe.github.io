$(document).ready(function() {
    
    var a, player1 = 0, player2 = 0,holder;
    
    $('.cross').on('click',function() {
       
        a = "X";
        $('.cross').removeClass('fade2');
        $('.circle').removeClass('fade2');
        $('.cross').addClass('fade2');
        
        
    });
    
    $('.circle').on('click',function() {
       
        a = "O";
        $('.cross').removeClass('fade2');
        $('.circle').removeClass('fade2');
        $('.circle').addClass('fade2');
   

        
    });
    
    
        place();
    
    
    function place() {
    
   $('.first-first').on('click',function() {
    
    (this).innerHTML= a;
       check();
   
});
    
$('.first-second').on('click',function() {
    (this).innerHTML= a;
      check();
   
});
    
$('.first-third').on('click',function() {
    (this).innerHTML= a;
      check();
   
});
    
$('.second-first').on('click',function() {
    (this).innerHTML= a;
      check();
   
});
    
$('.second-second').on('click',function() {
    
    (this).innerHTML= a;
      check();
   
});
    
$('.second-third').on('click',function() {
    (this).innerHTML= a;
      check();
   
});
    
$('.third-first').on('click',function() {
    (this).innerHTML= a;
      check();
   
});
    
$('.third-second').on('click',function() {
    (this).innerHTML= a;
      check();
   
});
    
$('.third-third').on('click',function() {
    
    (this).innerHTML= a;
      check();
   
});

    }
    function check() {
        console.log("checked");
        
        if ($('.first-first').text() == "X" &&  $('.second-second').text()  == "X" && $('.third-third').text() == "X" )
        {   
            holder =  $('.left-diaog');
           holder.addClass('show');
           declare(1);
        }
       else if ($('.first-first').text() == "X" && $('.first-second').text()  == "X" && $('.first-third').text() == "X" )
        {   holder = $('.first-row-line');
            holder.addClass('show');
           declare(1);
        }
     else if ($('.first-first').text() == "X" && $('.second-first').text() == "X" && $('.third-first').text() == "X" )
        {  holder = $('.first-col-line'); 
         holder.addClass('show');
           declare(1);
        }
    else if ($('.first-third').text() == "X" &&  $('.second-third').text()  == "X" && $('.third-third').text() == "X" )
        {   holder = $('.third-col-line');
         holder.addClass('show');
           declare(1);
        }
        else if ($('.second-first').text() == "X" && $('.second-second').text()  == "X" && $('.second-third').text() == "X" )
        {   holder = $('.second-row-line');
         holder.addClass('show');
           declare(1);
        }
        else if ($('.third-first').text() == "X" && $('.third-second').text()  == "X" && $('.third-third').text() == "X" )
        {  holder = $('.third-row-line');
          holder.addClass('show');
           declare(1);
        }
        else if ($('.first-second').text() == "X" && $('.second-second').text() == "X" && $('.third-second').text() == "X" )
        {   holder = $('.second-col-line');
         holder.addClass('show');
           declare(1);
        }
        else if ($('.first-third').text() == "X" && $('.second-second').text() == "X" && $('.third-first').text() == "X" )
        {   holder = $('.right-diaog');
         holder.addClass('show');
            declare(1);
        }
        
        
        
         if ($('.first-first').text() === "O" &&  $('.second-second').text()  === "O" && $('.third-third').text() === "O" )
        {    holder =  $('.left-diaog');
           holder.addClass('show');
            declare(2);
        }
       else if ($('.first-first').text() === "O" && $('.first-second').text()  === "O" && $('.first-third').text() === "O" )
        {  holder = $('.first-row-line');
            holder.addClass('show');
         declare(2);
        }
       else if ($('.first-first').text() === "O" && $('.second-first').text() === "O" && $('.third-first').text() === "O" )
        {   
            holder = $('.first-col-line'); 
            holder.addClass('show');
          declare(2);
        }
       else if ($('.first-third').text() === "O" &&  $('.second-third').text()  === "O" && $('.third-third').text() === "O" )
        {   holder = $('.third-col-line');
         holder.addClass('show');
            declare(2);
        }
        else if ($('.second-first').text() === "O" && $('.second-second').text()  === "O" && $('.second-third').text() === "O" )
        {   holder = $('.second-row-line');
         holder.addClass('show');
            declare(2);
        }
        else if ($('.third-first').text() === "O" && $('.third-second').text()  === "O" && $('.third-third').text() === "O" )
        {  holder = $('.third-row-line');
          holder.addClass('show');
           declare(2);
        }
        else if ($('.first-second').text() === "O" && $('.second-second').text() === "O" && $('.third-second').text() === "O" )
        {  holder = $('.second-col-line');
         holder.addClass('show');
           declare(2);
        }
        else if ($('.first-third').text() === "O" && $('.second-second').text() === "O" && $('.third-first').text() == "O" )
        {   holder = $('.right-diaog');
         holder.addClass('show');
         declare(2);
        }
        
    }
    
    function declare(d) {
        
        
        if(d === 1) {
            player1++;
            display(d, player1);
            
        }else if(d === 2) {
            player2++;
            display(d, player2);
        }
        
    }

        function display(b, c) {
            
      var time_1= setTimeout(function() {
        
            document.querySelector('.winner').innerHTML = "Player " + b + " Wins!"; 
          
             $('.winner').removeClass('hide'); 
            
            },100);
            
        var time_2 = setTimeout(function() {
               $('.winner').addClass('hide');
                holder.removeClass('show'); 
                document.querySelector('.player-' + b).innerHTML = "Player " + b + " : " + c; 
            
             document.querySelector('.first-first').innerHTML = "";
             document.querySelector('.first-second').innerHTML = "";
             document.querySelector('.first-third').innerHTML = "";
             document.querySelector('.second-first').innerHTML = "";
             document.querySelector('.second-second').innerHTML = "";
             document.querySelector('.second-third').innerHTML = "";
             document.querySelector('.third-first').innerHTML = "";
             document.querySelector('.third-second').innerHTML = "";
             document.querySelector('.third-third').innerHTML = "";
                
            },700);
            
        }
        
    
    
    
    $('.reset').on('click',function() {
        
        document.querySelector('.first-first').innerHTML = "";
             document.querySelector('.first-second').innerHTML = "";
             document.querySelector('.first-third').innerHTML = "";
             document.querySelector('.second-first').innerHTML = "";
             document.querySelector('.second-second').innerHTML = "";
             document.querySelector('.second-third').innerHTML = "";
             document.querySelector('.third-first').innerHTML = "";
             document.querySelector('.third-second').innerHTML = "";
             document.querySelector('.third-third').innerHTML = "";
             document.querySelector('.player-1').innerHTML = "Player 1 :";
             document.querySelector('.player-2').innerHTML = "Player 2 :";
            score1=0;
            score2=0;
        
    });
    
    
    
});




/* 



*/