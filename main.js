$(document).ready(function () {

  var quoteBank = [
    {
      'quote': '"It is not whether you get knocked down it is whether you get up"',
      'author': ' Vince Lombardi'
    },
    {
      'quote': '“The only way to prove that you’re a good sport is to lose.” ',
      'author': 'Ernie Banks'
    },
    {
      'quote': '“Age is no barrier. It’s a limitation you put on your mind.”',
      'author': 'Jackie Joyner-Kersee'
    },
    {
      'quote': '“I always felt that my greatest asset was not my physical ability, it was my mental ability.”',
      'author': 'Bruce Jenner'
    },
    {
      'quote': '“A trophy carries dust. Memories last forever.”',
      'author': 'Mary Lou Retton'
    },
    {
      'quote': '“Most people give up just when they’re about to achieve success. They quit on the one yard line"',
      'author': 'Ross Perot'
    },
    {
      'quote': '“The five S’s of sports training are: stamina, speed, strength, skill, and spirit; but the greatest of these is spirit."',
      'author': 'Ken Doherty'
    },
    {
      'quote': '“Make sure your worst enemy doesn’t live between your own two ears."',
      'author': 'Laird Hamilton'
    },
    {
      'quote': '“Persistence can change failure into extraordinary achievement."',
      'author': 'Matt Biondi'
    },
    {
      'quote': '“The mind is the limit. As long as the mind can envision the fact that you can do something, you can do it, as long you believe it 100%.”',
      'author': 'Arnold Schwarzenegger'
    },
    {
      'quote': '“I never left the field saying I could have done more to get ready and that gives me piece of mind.”',
      'author': 'Peyton Manning'
    },
    {
      'quote': '“You have to expect things of yourself before you can do them.” ',
      'author': 'Michael Jordan'
    },
    {
      'quote': '“People say I have attitude, maybe I do. But you have to believe in yourself when no one else does, that makes you a winner.”',
      'author': 'Venus Williams'
    },
    {
      'quote': '“I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion."',
      'author': 'Muhammad Ali'
    },
    {
      'quote': '“The more difficult the victory, the greater the happiness in winning."',
      'author': 'Pele'
    },
    {
      'quote': '“You miss 100 percent of the shots you don’t take.”',
      'author': 'Wayne Gretzky'
    },
    {
      'quote': '“I’ve missed 9,000 shots, lost 300 games, 26 times, I’ve taken the winning shot and missed. I’ve failed over and over again. That is why I succeed."',
      'author': 'Michael Jordan'
    },
    {
      'quote': '“You can’t put a limit on anything. The more you dream, the farther you get"',
      'author': 'Michael Phelps'
    }
  ]

  $('.newquote').click(function () {
    function newQuote () {
      var random = Math.floor(Math.random() * quoteBank.length)
      $('.text').text(quoteBank[random].quote);
      $('.name').text(quoteBank[random].author);
    }
    newQuote();
  });

  function randomColour () {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  $('.newquote').on('click', function () {
    $('.main,.newquote').css('background-color', randomColour());

  });




});