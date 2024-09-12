document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, options);


    // datepicker initalization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select" }

    });
    // select initalization
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });