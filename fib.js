function drukuj()
{
    var pole = document.getElementById('wynik');
    var k = document.getElementById('argument').value;
    var wynik = fib(k);
    pole.innerHTML = "Element " + k + " ciagu Fibonacciego to:" + wynik;
}

function fib(k)
{
    if(k<=0)return 0;
    if(k==1)return 1;
    return fib(k-1) + fib(k-2);
}