require('dotenv').config();
$(function () {
  //
  function renderTweet(tweet) {
    $('#tweet-container').prepend(createTweetElement(tweet));
  }

  function renderTweets(tweets) {
    tweets.forEach(function (tweet) {
      var article = createTweetElement(tweet.tweet);
      $('#tweet-container').prepend(article);
    });
  }

  function createTweetElement(tweet) {
    const fullName = tweet.user.name;
    const handle = tweet.user.handle;
    const tweetContent = tweet.content.text;
    const avatarSrc = tweet.user.avatars.small;
    const createdAt = tweet.created_at;

    var $tweet = $('<article>').addClass('tweet').html(
      `<header>
        <img src="${avatarSrc}"/> 
        <h2>${fullName}</h2> 
        <h3>${handle}</h3> 
      </header> 
      <section>${tweetContent}</section> 
      <footer> 
        ${createdAt}
        <div class="tweet-imgs"> 
         <i class="fa fa-heart"></i>
          <i class="fa fa-refresh"></i>
          <i class="fa fa-flag"></i>
        </div> 
        <div style="clear:both"></div>
      </footer> 
    </article>`);

    return $tweet;
  }

  $.get('/tweets').then(renderTweets);

  $('form').on('submit', function (event) {
    event.preventDefault();
    let data = $(this).serialize();
    $.post('/tweets', data, renderTweet);
  });

  $('#composetweetbutton').on('click', function (event) {
    $('.new-tweet').toggle('show');
    $('.charCountMessage').focus();
  });
});


