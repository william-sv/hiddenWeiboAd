document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    let targetNode = document.getElementsByClassName('WB_feed WB_feed_v3 WB_feed_v4');
    if (targetNode.length > 0) {
      targetNode = targetNode[0];
      targetNode.childNodes.forEach(ele => {
        if (ele.childNodes.length > 0 && ele.getAttribute('feedtype') == 'ad') {
          ele.style.display = 'none';
          console.log('隐藏了一个广告~');
        }
      });
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
              targetNode.childNodes.forEach(ele => {
                if (ele.childNodes.length > 0 && ele.getAttribute('feedtype') == 'ad') {
                  ele.style.display = 'none';
                  console.log('隐藏了一个广告~');
                }
              });
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