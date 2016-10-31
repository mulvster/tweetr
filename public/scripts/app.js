$(function () {

  //renderTweet(tweet) is called during the POST action when a user submits a tweet.
  // It simply renders the latest tweet that was submitted by the user.(one tweet)
  function renderTweet(tweet) {
    $('#tweet-container').prepend(createTweetElement(tweet));
  }
  // render tweets is called at the START to render all existing tweets from the database.
  // And since you want the latest tweets at the top, it prepends them to the #tweet-container
  // instead of appending
  renderTweets(tweet)
  function renderTweets(tweets) {
    tweets.forEach(function (tweet) {
      var article = createTweetElement(tweet.tweet);
      $('#tweet-container').prepend(article);
    });
  }

  function createTweetElement(tweet) {
    //grabiing the information from the database so it will automatically generate information for the new tweets.
    var fullName = tweet.user.name;
    var handle = tweet.user.handle;
    var tweetContent = tweet.content.text;
    var avatarSrc = tweet.user.avatars.small;
    var createdAt = tweet.created_at;

    //using es6 interpolation to put each new tweet into its own article and then return it.
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

  //ajax request with promise calling rendertweets callback.
  $.get('/tweets').then(renderTweets);

  //this is what posts the tweet, makes it so that there is no redirect and the new tweet renders immidiately.
  //.serialize method acts on jquery object and creates a text string in standard URL-encoded notation
  $('form').on('submit', function (event) {
    event.preventDefault();
    var data = $(this).serialize();
    //posts new tweet to /tweets with renderTweet callback which makes sure the newest tweet
    //is on top of the page and not at the bottom. Data is taking what the person submits on the form.
    $.post('/tweets', data, renderTweet);
  });

  //this auto focus' text box and toggles tweet button when you press the tweet button.
  $('#composetweetbutton').on('click', function (event) {
    $('.new-tweet').toggle('show');
    $('.charCountMessage').focus();
  });
});


