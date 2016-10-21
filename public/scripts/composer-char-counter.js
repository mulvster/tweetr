$(function () {
  const limitOfCharacters = 140;
  const warningForCharacterLimit = 'red';

  function countDown() {

    let amountRemaining = limitOfCharacters - $('.charCountMessage').val().length;
    if (amountRemaining < 0) {
      $('#tweetingButton').prop('disabled', true);
      $('.counter').css('color', warningForCharacterLimit);
      $('.submitError').fadeIn();
    }
      else if(amountRemaining === 140) {
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

  $(this).bind("input", countDown);
})