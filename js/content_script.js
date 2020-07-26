document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    let targetNode = document.getElementsByClassName('WB_cardwrap WB_feed_type S_bg2 WB_feed_like');
    if (targetNode.length > 0) {
      for (const childNode of targetNode) {
        if (childNode.getAttribute('feedtype') == 'ad') {
          childNode.style.display = 'none';
        }
      }
      let config = {
        attributes: true,
        childList: true,
        subtree: false
      };
      const mutationCallback = (mutationsList) => {
        for (let mutation of mutationsList) {
          let type = mutation.type;
          switch (type) {
            case "childList":
              for (const childNode of targetNode) {
                if (childNode.getAttribute('feedtype') == 'ad') {
                  childNode.style.display = 'none';
                }
              }
              break;
            default:
              break;
          }
        }
      };
      let observer = new MutationObserver(mutationCallback);
      observer.observe(targetNode, config);
      // observer.disconnect();
    } 
  }
}