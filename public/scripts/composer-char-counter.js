$(function () {
  const limitOfCharacters = 140;
  const warningForCharacterLimit = 'red';

  function countDown() {

    let amountRemaining = limitOfCharacters - $('.charCountMessage').val().length;
    if (amountRemaining < 0) {
      $('#tweetingButton').prop('disabled', true);
      $('.counter').css('color', warningForCharacterLimit);

    } else {
      $('#tweetingButton').prop('disabled', false);
      $('.counter').css('color', 'black');
    }
    $('.counter').text(amountRemaining);
  }

  countDown();

  $('.charCountMessage').change(countDown);
  $('.charCountMessage').keyup(countDown);
});

