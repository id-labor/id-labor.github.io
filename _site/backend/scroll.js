$('body').scrollspy({ target: '#scrollspy', offset: 150 });

var offset = 145;

$('#scrollspy a').click(function(event) {
    event.preventDefault();
    $($(this).attr('href'))[0].scrollIntoView();
    scrollBy(0, -offset);
});
