$(document).ready(function () {
  $('li').css('margin', '10px');
  $('li').attr('id', 'uw');

  $('#p1 li').click(function () {
    $(this).fadeOut(2000);
  });

  $('#p2-fadein').on('mouseover', () => {
    $('#p2 li').each((i, ele) => {
      $(ele).fadeIn(2000);
    });
  });

  $('#p3 li').click(function () {
    const self = $(this);
    $('#p3 li').each((i, val) => {
      const ele = $(val);
      if (ele.is(self)) {
        $(val).fadeTo('slow', 1.0);
      } else {
        $(val).fadeTo('slow', 0.2);
      }
    })
  });

  $('#p4 li').click(function () {
    $(this).fadeToggle(2000);
  })
});