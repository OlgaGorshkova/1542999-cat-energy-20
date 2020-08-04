function onMenuClick() {
  $(document).ready(function(){
    $(".main-nav--jsonly").removeClass("hidden");
    $(".main-nav__open--jsonly").addClass("hidden");
    $(".main-nav__close--jsonly").removeClass("hidden");
  });
}

function onMenuCloseClick() {
  $(document).ready(function(){
    $(".main-nav--jsonly").addClass("hidden");
    $(".main-nav__open--jsonly").removeClass("hidden");
    $(".main-nav__close--jsonly").addClass("hidden");
  });
}
