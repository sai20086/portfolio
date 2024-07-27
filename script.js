var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
  $messages.mCustomScrollbar();
  setTimeout(function() {
    introMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
  }
}

function introMessage() {
  var introHtml = `
    <div class="message new">
      <figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>
      Hello! I'm [Your Name], a [Your Profession/Student/Enthusiast] with a passion for [Your Interests].
      I'd love to share more about myself. What would you like to know?
    </div>
  `;
  $(introHtml).appendTo($('.mCSB_container')).addClass('new');
  setDate();
  updateScrollbar();
  
  var optionsHtml = `
    <div class="options">
      <button class="option" data-option="resume">View my Resume</button>
      <button class="option" data-option="projects">Explore my Projects</button>
      <button class="option" data-option="bio">Learn more about me</button>
    </div>
  `;
  $(optionsHtml).appendTo($('.chat')); // add options outside of message container
}

$('.chat').on('click', '.option', function() {
  var option = $(this).data('option');
  sendMessage(option);
});

function sendMessage(option) {
  var message = '';
  switch (option) {
    case 'resume':
      message = 'I\'d like to see your resume!';
      break;
    case 'projects':
      message = 'Show me your projects!';
      break;
    case 'bio':
      message = 'Tell me more about yourself!';
      break;
    default:
      console.log('Invalid option');
  }
  insertMessage(message);
}

function insertMessage(msg) {
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function() {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

function fakeMessage() {
  // respond to the user's message
  var response = '';
  switch (i) {
    case 0:
      response = 'Here\'s my resume:';
      break;
    case 1:
      response = 'Check out some of my projects:';
      break;
    case 2:
      response = 'Here\'s a bit about myself:';
      break;
    default:
      response = 'Thanks for chatting with me!';
  }
  $('<div class="message new"><figure class="avatar"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/156381/profile/profile-80.jpg" /></figure>' + response + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  updateScrollbar();
  i++;
}

$('.message-input').keypress(function(e) {
  if (e.which == 13) {
    var text = $(this).val();
    if (text !== '') {
      insertMessage(text);
      $(this).val('');
    }
  }
});

$('.send-btn').click(function() {
  var text = $('.message-input').val();
  if (text !== '') {
    insertMessage(text);
    $('.message-input').val('');
  }
});
