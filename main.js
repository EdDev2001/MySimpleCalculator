let outputscreen=document.getElementById('output-onscreen');
function display(num){outputscreen.value +=num}
function calculate(){try{outputscreen.value = eval(outputscreen.value) }catch(err){ alert("invalid") }}
function clr(){ outputscreen.value=''}
function del(){outputscreen.value=outputscreen.value.slice(0,-1)}