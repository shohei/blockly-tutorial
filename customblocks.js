Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
    .appendField("Turn")
    .appendField(new Blockly.FieldDropdown([["red","R"], ["yellow","Y"], ["green","G"], ["orange","O"], ["all","all"]]), "lightcolor")
    .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');

  console.log(dropdown_lightcolor);
  console.log(dropdown_switch);


  if (dropdown_lightcolor == "R"){
    if(dropdown_switch =="on"){
      var code = "document.getElementById('circle').style.backgroundColor='red';";
    }
    if(dropdown_switch=="off"){
      var code = "document.getElementById('circle').style.backgroundColor='white';";
    }
  }
  if (dropdown_lightcolor == "Y"){
    if(dropdown_switch =="on"){
      var code = "document.getElementById('circle').style.backgroundColor='yellow';";
    }
    if(dropdown_switch=="off"){
      var code = "document.getElementById('circle').style.backgroundColor='white';";
    }
  }
  if (dropdown_lightcolor == "G"){
    if(dropdown_switch =="on"){
      var code = "document.getElementById('circle').style.backgroundColor='green';";
    }
    if(dropdown_switch=="off"){
      var code = "document.getElementById('circle').style.backgroundColor='white';";
    }
  }
  if (dropdown_lightcolor == "O"){
    if(dropdown_switch =="on"){
      var code = "document.getElementById('circle').style.backgroundColor='orange';";
    }
    if(dropdown_switch=="off"){
      var code = "document.getElementById('circle').style.backgroundColor='white';";
    }
  }
  if (dropdown_lightcolor == "all"){
    if(dropdown_switch =="on"){
      var code = "document.getElementById('circle').style.backgroundColor='white';";
    }
    if(dropdown_switch=="off"){
      var code = "document.getElementById('circle').style.backgroundColor='white';";
    }
  }
  return code;
};

Blockly.Python['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');

  if(dropdown_switch =="on"){
    var code = 'changeColor("red")';
  }
  if(dropdown_switch=="off"){
    var code = 'changeColor("white")';
  }

  return code;
};
