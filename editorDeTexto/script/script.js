document.querySelector("button").onclick = function() {
    var ta = document.querySelector("textarea");
    ta.value = ta.value.substring(0, ta.selectionStart)
               ta.value.substring(ta.selectionEnd);
  }


