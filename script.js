function copyToClipboard() {
    var text = document.getElementById("json-output").value;
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    var tooltip = document.getElementById("copy-button");
    tooltip.innerHTML = "Copied!";
  }

  function resetCopyToolTip(){
    var tooltip = document.getElementById("copy-button");
    tooltip.innerHTML = "Copy to Clipboard";
  }
  
  function formatJSON() {
    var input = document.getElementById("json-input").value;
    try {
      var json = JSON.parse(input);
      var output = JSON.stringify(json, null, 2);
      document.getElementById("json-output").value = output;
    } catch (e) {
      document.getElementById("json-output").value = "Invalid JSON";
    }
  }
  
  var input = document.getElementById("json-input");
  input.addEventListener("input", formatJSON);
  