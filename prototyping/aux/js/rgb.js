(function() {
  var currentTime = new Date().getHours();
  if (7 <= currentTime && currentTime < 20) {
        $('body').css('background-color','#EEE')
  }
  else {
        $('body').css('background-color','#222')
  }
  window.red = 0;
  window.blue = 0;
  window.green = 0;
  $(function() {
    $("#slider-red").slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 255,
      value: 0,
      slide: function(event, ui) {
        window.red = ui.value;
        $("#amount-red").html(ui.value);
        $("#slider-red > .ui-slider-handle, #slider-red > .ui-slider-range").css("background", `rgb(${window.red}, 0, 0)`);
        $('nav').attr('style', `background-color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('.text-primary').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('#email').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('.adam-content > h3 > a, .adam-content > h4 > a, .adam-content > h5 > a').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
      }
    });
    $("#slider-blue").slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 255,
      value: 0,
      slide: function(event, ui) {
        window.blue = ui.value;
        $("#amount-blue").html(ui.value);
        $("#slider-blue > .ui-slider-handle, #slider-blue > .ui-slider-range").css("background", `rgb(0, 0, ${window.blue})`);
        $('nav').attr('style', `background-color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('.text-primary').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('#email').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('.adam-content > h3 > a, .adam-content > h4 > a, .adam-content > h5 > a').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
      }
    });
    return $("#slider-green").slider({
      orientation: "vertical",
      range: "min",
      min: 0,
      max: 255,
      value: 0,
      slide: function(event, ui) {
        window.green = ui.value;
        $("#amount-green").html(ui.value);
        $("#slider-green > .ui-slider-handle, #slider-green > .ui-slider-range").css("background", `rgb(0, ${window.green}, 0)`);
        $('nav').attr('style', `background-color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('.text-primary').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('#email').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
        $('.adam-content > h3 > a, .adam-content > h4 > a, .adam-content > h5 > a').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
      }
    });
  });
}).call(this);