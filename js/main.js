(function () {
  var typewriter = new Typewriter(document.getElementById('typingarea'), {
      loop: true,
      animateCursor: false
  });
  typewriter.typeString('Web Application')
            .pauseFor(2500).deleteChars(12).typeString('site')
            .pauseFor(2500).deleteChars(4).typeString(' Portal')
            .pauseFor(2500).deleteAll().typeString('Restful API')
            .pauseFor(2500).deleteAll().typeString('Microservice')
            .pauseFor(2500).deleteAll().typeString('Mobile Application')
            .pauseFor(2500).deleteAll().typeString('Microservice');
  typewriter.start();

  if(! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){
    var bv = new Bideo();
    bv.init({
      // Video element
      videoEl: document.querySelector('#background_video'),
      // Container element
      container: document.querySelector('body'),
      // Resize
      resize: true,
      // Array of objects containing the src and type
      // of different video formats to add
      src: [
        {
          src: 'resources/video.mp4',
          type: 'video/mp4'
        }
      ],
      // What to do once video loads (initial frame)
      onLoad: function () {
        document.querySelector('#video_cover').style.display = 'none';
      }
    });
  }
}());