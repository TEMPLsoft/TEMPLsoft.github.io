$(document).on('ready', function() {
  $('#top-contact-link').mouseenter(function() {
    ga('send', 'event', 'link', 'hover', 'top-contact-link');
  });

  $('#bottom-contact-link').mouseenter(function() {
    ga('send', 'event', 'link', 'hover', 'bottom-contact-link');
  });

  $('#top-contact-link').on('click', function() {
    ga('send', 'event', 'link', 'click', 'top-contact-link');
  });

  $('#bottom-contact-link').on('click', function() {
    ga('send', 'event', 'link', 'click', 'bottom-contact-link');
  });
});
