var mouseEvent = "empty";
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    widthOfLine = 2;
    var largura = screen.width;
new_width = screen.width - 70;
new_heigth = screen.height - 300;

if( largura < 992 ) {
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchttart", myTouchStart);
    
    function myTouchStart(e)
    {
        //Início da Atividade Adicional
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        //Fim da Atividade Adicional

        mouseEvent = "touchStart";
    }
        canvas.addEventListener("touchmove", myTouchMove);
        function myTouchMove(e)
        {

            PositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
            PositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + PositionOfTouchX + "y = " + PositionOfTouchY);
        ctx.lineTo(PositionOfTouchX, PositionOfTouchY);
        ctx.stroke();
        }

        lastPositionOfX = currentPositionOfMouseX; 
        lastPositionOfY = currentPositionOfMouseY;

