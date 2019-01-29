
$(document).ready(function(){
  let valSelected, incomesVal, userVal, expensesVal, incomesTextDescription,
  expensesTextDescription, descriptionContent, bugetVal=0;
  let testVar=0;

  $(document).on('click', '#save', function(){
    incomeDescription();
  });

  $(document).on('click', '.fas', function(){
    let oldBudget  = parseInt($('#Budget-val').text());

    if($(this).parents('.description-section__left').hasClass('right')){
      let diffrenceBudget = parseInt($(this).parents('.textUser').text());
      let newBudget = oldBudget - diffrenceBudget;
      $('#Budget-val').text(newBudget);
      $(this).parents('.description-section__left').remove();
    }else if($(this).parents('.description-section__left').hasClass('left')){
      let diffrenceBudget = parseInt($(this).parents('.textUser').text());
      let newBudget = oldBudget - diffrenceBudget;
      let currentIncome =
      //aggiorno il budget
      $('#Budget-val').text(newBudget);
      //aggiorno il valore dell'income
      $(this).parents('.description-section__left').remove();

    }



  });



    function incomeDescription(){
      valSelected = $('#valSelected').children("option:selected").val();
      userVal=parseInt($('#user-val').val());
      incomesTextDescription = $('#description-content').val();
      if (valSelected === '+' && !isNaN(userVal)) {
         incomesVal=parseInt($('#Incomes-val').text());
         //bugetVal=incomesVal;
         incomesVal +=  userVal;
         bugetVal +=userVal;


         $('#Incomes-val').text(incomesVal);
         $('#Budget-val').text(bugetVal);
         //incomesTextDescription = $('#description-content').val();
         if(incomesTextDescription != NaN){
           $('#incomesTextDescription').append("<div class='description-section__left left'>"
                                               + incomesTextDescription +  "<span class='textUser'>" + userVal
                                               + "&nbsp&nbsp" + "<i class='fas fa-trash-alt'></i></span></div>");
         }
         $('#user-val').val('');
         $('#description-content').val('');
        //console.log(valSelected);

      }
      else if (valSelected === '-' && !isNaN(userVal)){
        expensesVal=parseInt($('#expenses-val').text());
        expensesVal -=  userVal;

        bugetVal -=userVal;


        $('#Budget-val').text(bugetVal);
        $('#expenses-val').text(expensesVal);
        if(incomesTextDescription != NaN){
          $('#expensesTextDescription').append("<div class='description-section__left right'>"
                                              + incomesTextDescription +  "<span class='textUser'>" + userVal
                                              + "&nbsp&nbsp" + "<i class='fas fa-trash-alt'></i></span></div>");
        }

        //inserisco il valore della descripttion e del valore nella lista
        $('#user-val').val('');
        $('#description-content').val('');
      }
      else{
        // toastr.options.closeDuration = 300;
         alert('Insert a new value in the box!')


      }

    }


  });


/*
TO do
1. if I cancel an item in the incomes items list description, the ammount of total incomes will decrease
2. if I cancel an item in the expenses items list, the amount of total expenses will increase
3. if I insert a new element in the list and then press enter, the new element will be added to the  list
4. change the background color of the budget in red if the value is <0, and to green if the value is >=0
5. add the year and month and eventually tha date in the future
6. sistemare il layout con css e scss per praticare


*/
