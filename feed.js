(() => {

const midClient = screen.height / 2;
let position = 0;

var userFeed = new Instafeed({
  get: 'user',
  userId: ,
  accessToken: ,
  limit: 40,
  template: '</div><a class="thumbnail" href="{{link}}" target="_blank"><img style="width: 33.3vw" src="{{image}}" /></a>',
  resolution: 'standard_resolution',
  after: () => {
    $('.loading').css({
      "animation-name": "load-out",
      "animation-duration": "5s",
      "opacity": "0",
      "pointer-events":"none",
     });

   $('body').mousemove(function(e) {
     let vertical = e.pageY;
     if(vertical >= midClient) {
       position-=1.5;
     } else if (position < 0) {
       position+=1.5;
     }
     $('#instafeed').css("margin-top", position);
   });
  }
});

userFeed.run();

})();
