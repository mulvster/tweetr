$(function () {
    const maxCharacters = 140;

    $('#tweetingButton').text(maxCharacters);

    $('.counter').bind('keyup keydown', function() {
      var count = $('#tweetingButton');
      var characters = $(this).val().length;

      if (characters > maxCharacters) {
        count.addClass('over');
      } else {
        count.removeClass('over');
      }
    }
    count.text(maxCharacters - characters);
  });
