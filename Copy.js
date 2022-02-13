function clipCopy() {
   
    var copytext = document.getElementById('copyText');
   
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
        
        try {
           
            copytext.readOnly = false;
           
            var range = document.createRange();
            range.selectNode(copytext);
            window.getSelection().addRange(range);
           
            document.execCommand("copy");
     
            copytext.readOnly = true;
            alert("Copied!");
        } catch (e) {
           
            copytext.readOnly = true;
            alert("Error");
        }
    } else {
      
        try {
            copytext.select();
            document.execCommand('copy');
            alert("Copied!");
        } catch (e) {
            alert("Error");
        }
    }
};
