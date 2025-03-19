function sameer() {
    let hindi = parseFloat(document.getElementById("hin").value);
    let english = parseFloat(document.getElementById("eng").value);
    let math = parseFloat(document.getElementById("math").value);
    let biology = parseFloat(document.getElementById("bio").value);
    let chemistry = parseFloat(document.getElementById("chem").value);
 
    let sum = hindi + english + math + biology + chemistry;
    document.getElementById("demo").innerHTML = `your total number is =${sum}`;
    let percentage = (sum/5);
    document.getElementById("demo1").innerHTML = `your percentage is = ${percentage}%`;
 
 
 }