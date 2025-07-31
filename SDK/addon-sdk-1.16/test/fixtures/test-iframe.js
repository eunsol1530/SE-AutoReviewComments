var count = 0;

setTimeout(function() {
  window.addEventListener("message", function(msg) {
    // Check if the message is from a trusted origin
    if (msg.origin !== "https://trusted-origin.com") {
      return;
    }
    if (++count > 1) {
    	self.postMessage(msg.data);
    }
    else msg.source.postMessage(msg.data, '*');
  });

  document.getElementById('inner').src = iframePath;
}, 0);
