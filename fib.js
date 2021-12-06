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
    var a;
    var a_1 = 1;
    var a_2 = 0;
    var next;
    for(var i = 1;i<k;i++)
    {
        a = a_1 + a_2;
        a_2 = a_1;
        a_1 = a;
    }
    return a;
}