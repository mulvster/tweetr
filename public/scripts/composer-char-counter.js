$(function () {
  var limitOfCharacters = 140;
  var warningForCharacterLimit = 'red';

  //function that counts' the letter count.
  function countDown() {

    var amountRemaining = limitOfCharacters - $('.charCountMessage').val().length;
    if (amountRemaining < 0) {
      $('#tweetingButton').prop('disabled', true);
      $('.counter').css('color', warningForCharacterLimit);
      $('.submitError').fadeIn();
    }
    //makes it so submit button is disabled if you haven't written anything.
    else if (amountRemaining === 140) {
      $('#tweetingButton').prop('disabled', true);
    }

    else {
      $('#tweetingButton').prop('disabled', false);
      $('.counter').css('color', 'black');
      $('.submitError').fadeOut();
    }
    $('.counter').text(amountRemaining);
  }

  countDown();

})