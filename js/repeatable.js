!function(n){n(document).on("click touchstart","[data-confirm]",function(t){confirm(n(this).data("confirm"))||t.preventDefault()})}(window.jQuery||window.Zepto||window.Sprint);