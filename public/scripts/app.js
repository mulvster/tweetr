$(function() {
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
  tweets.forEach(function (tweet) {
    var article = createTweetElement(tweet);
    $('#tweet-container').append(article);
  });
}

function createTweetElement(tweet) {
  const fullName = tweet.user.name;
  const handle = tweet.user.handle;
  const tweetContent = tweet.content.text;
  const avatarSrc = tweet.user.avatars.small;

  var $tweet = $('<article>').addClass('tweet').html(
      `<header>
        <img src="${avatarSrc}"/> 
        <h2>${fullName}</h2> 
        <h3>${handle}</h3> 
      </header> 
      <section>${tweetContent}</section> 
      <footer> 
        <div class="tweet-imgs"> 
          <img class="heart" src="/images/icon-like.png"> 
          <img class="retweet" src="/images/icon-retweet.png"> 
          <img class="flag" src="/images/icon-flag.png"> 
        </div> 
      </footer> 
    </article>`);

  return $tweet;
}
renderTweets(data);
});