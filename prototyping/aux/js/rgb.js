(function() {
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
        $('.adam-content > h3 > a').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
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
        $('.adam-content > h3 > a').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
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
        $('.adam-content > h3 > a').attr('style', `color: rgb(${window.red}, ${window.green}, ${window.blue}) !important`);
      }
    });
  });
}).call(this);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsR0FBUCxHQUFhOztFQUNiLE1BQU0sQ0FBQyxJQUFQLEdBQWM7O0VBQ2QsTUFBTSxDQUFDLEtBQVAsR0FBZTs7RUFDZixDQUFBLENBQUUsUUFBQSxDQUFBLENBQUE7SUFDQSxDQUFBLENBQUUsYUFBRixDQUFnQixDQUFDLE1BQWpCLENBQXdCO01BQ3RCLFdBQUEsRUFBYSxVQURTO01BRXRCLEtBQUEsRUFBTyxLQUZlO01BR3RCLEdBQUEsRUFBSyxDQUhpQjtNQUl0QixHQUFBLEVBQUssR0FKaUI7TUFLdEIsS0FBQSxFQUFPLENBTGU7TUFNdEIsS0FBQSxFQUFPLFFBQUEsQ0FBQyxLQUFELEVBQVEsRUFBUixDQUFBO1FBQ0wsTUFBTSxDQUFDLEdBQVAsR0FBYSxFQUFFLENBQUM7UUFDaEIsQ0FBQSxDQUFHLGFBQUgsQ0FBa0IsQ0FBQyxJQUFuQixDQUF5QixFQUFFLENBQUMsS0FBNUI7UUFDQSxDQUFBLENBQUUsaUVBQUYsQ0FBb0UsQ0FBQyxHQUFyRSxDQUF5RSxZQUF6RSxFQUF1RixDQUFBLElBQUEsQ0FBQSxDQUFPLE1BQU0sQ0FBQyxHQUFkLENBQWtCLE9BQWxCLENBQXZGO1FBQ0EsQ0FBQSxDQUFFLFdBQUYsQ0FBYyxDQUFDLEdBQWYsQ0FBbUIsWUFBbkIsRUFBaUMsQ0FBQSxJQUFBLENBQUEsQ0FBTyxNQUFNLENBQUMsR0FBZCxDQUFrQixFQUFsQixDQUFBLENBQXNCLE1BQU0sQ0FBQyxLQUE3QixDQUFtQyxFQUFuQyxDQUFBLENBQXVDLE1BQU0sQ0FBQyxJQUE5QyxDQUFtRCxDQUFuRCxDQUFqQztlQUNBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxHQUFSLENBQVksT0FBWixFQUFxQixDQUFBLElBQUEsQ0FBQSxDQUFPLE1BQU0sQ0FBQyxHQUFkLENBQWtCLEVBQWxCLENBQUEsQ0FBc0IsTUFBTSxDQUFDLEtBQTdCLENBQW1DLEVBQW5DLENBQUEsQ0FBdUMsTUFBTSxDQUFDLElBQTlDLENBQW1ELENBQW5ELENBQXJCO01BTEs7SUFOZSxDQUF4QjtJQWFBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsTUFBbEIsQ0FBeUI7TUFDdkIsV0FBQSxFQUFhLFVBRFU7TUFFdkIsS0FBQSxFQUFPLEtBRmdCO01BR3ZCLEdBQUEsRUFBSyxDQUhrQjtNQUl2QixHQUFBLEVBQUssR0FKa0I7TUFLdkIsS0FBQSxFQUFPLENBTGdCO01BTXZCLEtBQUEsRUFBTyxRQUFBLENBQUMsS0FBRCxFQUFRLEVBQVIsQ0FBQTtRQUNMLE1BQU0sQ0FBQyxJQUFQLEdBQWMsRUFBRSxDQUFDO1FBQ2pCLENBQUEsQ0FBRyxjQUFILENBQW1CLENBQUMsSUFBcEIsQ0FBMEIsRUFBRSxDQUFDLEtBQTdCO1FBQ0EsQ0FBQSxDQUFFLG1FQUFGLENBQXNFLENBQUMsR0FBdkUsQ0FBMkUsWUFBM0UsRUFBeUYsQ0FBQSxVQUFBLENBQUEsQ0FBYSxNQUFNLENBQUMsSUFBcEIsQ0FBeUIsQ0FBekIsQ0FBekY7UUFDQSxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsR0FBZixDQUFtQixZQUFuQixFQUFpQyxDQUFBLElBQUEsQ0FBQSxDQUFPLE1BQU0sQ0FBQyxHQUFkLENBQWtCLEVBQWxCLENBQUEsQ0FBc0IsTUFBTSxDQUFDLEtBQTdCLENBQW1DLEVBQW5DLENBQUEsQ0FBdUMsTUFBTSxDQUFDLElBQTlDLENBQW1ELENBQW5ELENBQWpDO2VBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLENBQUEsSUFBQSxDQUFBLENBQU8sTUFBTSxDQUFDLEdBQWQsQ0FBa0IsRUFBbEIsQ0FBQSxDQUFzQixNQUFNLENBQUMsS0FBN0IsQ0FBbUMsRUFBbkMsQ0FBQSxDQUF1QyxNQUFNLENBQUMsSUFBOUMsQ0FBbUQsQ0FBbkQsQ0FBckI7TUFMSztJQU5nQixDQUF6QjtXQWFBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsTUFBbkIsQ0FBMEI7TUFDeEIsV0FBQSxFQUFhLFVBRFc7TUFFeEIsS0FBQSxFQUFPLEtBRmlCO01BR3hCLEdBQUEsRUFBSyxDQUhtQjtNQUl4QixHQUFBLEVBQUssR0FKbUI7TUFLeEIsS0FBQSxFQUFPLENBTGlCO01BTXhCLEtBQUEsRUFBTyxRQUFBLENBQUMsS0FBRCxFQUFRLEVBQVIsQ0FBQTtRQUNMLE1BQU0sQ0FBQyxLQUFQLEdBQWUsRUFBRSxDQUFDO1FBQ2xCLENBQUEsQ0FBRyxlQUFILENBQW9CLENBQUMsSUFBckIsQ0FBMkIsRUFBRSxDQUFDLEtBQTlCO1FBQ0EsQ0FBQSxDQUFFLHFFQUFGLENBQXdFLENBQUMsR0FBekUsQ0FBNkUsWUFBN0UsRUFBMkYsQ0FBQSxPQUFBLENBQUEsQ0FBVSxNQUFNLENBQUMsS0FBakIsQ0FBdUIsSUFBdkIsQ0FBM0Y7UUFDQSxDQUFBLENBQUUsV0FBRixDQUFjLENBQUMsR0FBZixDQUFtQixZQUFuQixFQUFpQyxDQUFBLElBQUEsQ0FBQSxDQUFPLE1BQU0sQ0FBQyxHQUFkLENBQWtCLEVBQWxCLENBQUEsQ0FBc0IsTUFBTSxDQUFDLEtBQTdCLENBQW1DLEVBQW5DLENBQUEsQ0FBdUMsTUFBTSxDQUFDLElBQTlDLENBQW1ELENBQW5ELENBQWpDO2VBQ0EsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCLENBQUEsSUFBQSxDQUFBLENBQU8sTUFBTSxDQUFDLEdBQWQsQ0FBa0IsRUFBbEIsQ0FBQSxDQUFzQixNQUFNLENBQUMsS0FBN0IsQ0FBbUMsRUFBbkMsQ0FBQSxDQUF1QyxNQUFNLENBQUMsSUFBOUMsQ0FBbUQsQ0FBbkQsQ0FBckI7TUFMSztJQU5pQixDQUExQjtFQTNCQSxDQUFGO0FBSEEiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cucmVkID0gMFxud2luZG93LmJsdWUgPSAwXG53aW5kb3cuZ3JlZW4gPSAwXG4kIC0+IFxuICAkKFwiI3NsaWRlci1yZWRcIikuc2xpZGVyKHtcbiAgICBvcmllbnRhdGlvbjogXCJ2ZXJ0aWNhbFwiXG4gICAgcmFuZ2U6IFwibWluXCIsXG4gICAgbWluOiAwLFxuICAgIG1heDogMjU1LFxuICAgIHZhbHVlOiAwLFxuICAgIHNsaWRlOiAoZXZlbnQsIHVpKSAtPlxuICAgICAgd2luZG93LnJlZCA9IHVpLnZhbHVlXG4gICAgICAkKCBcIiNhbW91bnQtcmVkXCIgKS5odG1sKCB1aS52YWx1ZSApXG4gICAgICAkKFwiI3NsaWRlci1yZWQgPiAudWktc2xpZGVyLWhhbmRsZSwgI3NsaWRlci1yZWQgPiAudWktc2xpZGVyLXJhbmdlXCIpLmNzcyBcImJhY2tncm91bmRcIiwgXCJyZ2IoI3t3aW5kb3cucmVkfSwgMCwgMClcIlxuICAgICAgJChcImh0bWwsYm9keVwiKS5jc3MgXCJiYWNrZ3JvdW5kXCIsIFwicmdiKCN7d2luZG93LnJlZH0sICN7d2luZG93LmdyZWVufSwgI3t3aW5kb3cuYmx1ZX0pXCJcbiAgICAgICQoXCJoMVwiKS5jc3MgXCJjb2xvclwiLCBcInJnYigje3dpbmRvdy5yZWR9LCAje3dpbmRvdy5ncmVlbn0sICN7d2luZG93LmJsdWV9KVwiXG4gICAgfSlcbiAgJChcIiNzbGlkZXItYmx1ZVwiKS5zbGlkZXIoe1xuICAgIG9yaWVudGF0aW9uOiBcInZlcnRpY2FsXCJcbiAgICByYW5nZTogXCJtaW5cIixcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgdmFsdWU6IDAsXG4gICAgc2xpZGU6IChldmVudCwgdWkpIC0+XG4gICAgICB3aW5kb3cuYmx1ZSA9IHVpLnZhbHVlXG4gICAgICAkKCBcIiNhbW91bnQtYmx1ZVwiICkuaHRtbCggdWkudmFsdWUgKVxuICAgICAgJChcIiNzbGlkZXItYmx1ZSA+IC51aS1zbGlkZXItaGFuZGxlLCAjc2xpZGVyLWJsdWUgPiAudWktc2xpZGVyLXJhbmdlXCIpLmNzcyBcImJhY2tncm91bmRcIiwgXCJyZ2IoMCwgMCwgI3t3aW5kb3cuYmx1ZX0pXCJcbiAgICAgICQoXCJodG1sLGJvZHlcIikuY3NzIFwiYmFja2dyb3VuZFwiLCBcInJnYigje3dpbmRvdy5yZWR9LCAje3dpbmRvdy5ncmVlbn0sICN7d2luZG93LmJsdWV9KVwiXG4gICAgICAkKFwiaDFcIikuY3NzIFwiY29sb3JcIiwgXCJyZ2IoI3t3aW5kb3cucmVkfSwgI3t3aW5kb3cuZ3JlZW59LCAje3dpbmRvdy5ibHVlfSlcIlxuICAgIH0pXG4gICQoXCIjc2xpZGVyLWdyZWVuXCIpLnNsaWRlcih7XG4gICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIlxuICAgIHJhbmdlOiBcIm1pblwiLFxuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICB2YWx1ZTogMCxcbiAgICBzbGlkZTogKGV2ZW50LCB1aSkgLT5cbiAgICAgIHdpbmRvdy5ncmVlbiA9IHVpLnZhbHVlXG4gICAgICAkKCBcIiNhbW91bnQtZ3JlZW5cIiApLmh0bWwoIHVpLnZhbHVlIClcbiAgICAgICQoXCIjc2xpZGVyLWdyZWVuID4gLnVpLXNsaWRlci1oYW5kbGUsICNzbGlkZXItZ3JlZW4gPiAudWktc2xpZGVyLXJhbmdlXCIpLmNzcyBcImJhY2tncm91bmRcIiwgXCJyZ2IoMCwgI3t3aW5kb3cuZ3JlZW59LCAwKVwiXG4gICAgICAkKFwiaHRtbCxib2R5XCIpLmNzcyBcImJhY2tncm91bmRcIiwgXCJyZ2IoI3t3aW5kb3cucmVkfSwgI3t3aW5kb3cuZ3JlZW59LCAje3dpbmRvdy5ibHVlfSlcIlxuICAgICAgJChcImgxXCIpLmNzcyBcImNvbG9yXCIsIFwicmdiKCN7d2luZG93LnJlZH0sICN7d2luZG93LmdyZWVufSwgI3t3aW5kb3cuYmx1ZX0pXCJcbiAgICB9KVxuICAiXX0=
//# sourceURL=coffeescript