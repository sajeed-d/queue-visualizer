const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


let queue = [10,20,30,40,10,20,30,40,10,20,70];
const boxHeight = 50;


function drawQueue(frontIndex= -1,rearIndex = -1){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let barWidth = 90;
    let gap = 2;
    canvas.width = queue.length*(barWidth + gap) + 40;

    queue.forEach((value,i) => {
        let x = i * (barWidth + gap) +20;
        let y = canvas.height - 150; 

        if(i === rearIndex){
            ctx.fillStyle = "green";
        }else if(i === frontIndex){
            ctx.fillStyle = "yellow";
        }else if(i < frontIndex){
            ctx.fillStyle = "red";
        }else{
            ctx.fillStyle = "blue";
        }

        ctx.fillRect(x, y, barWidth, 100);
        
        ctx.fillStyle = "white";
        ctx.fillText(value, x + barWidth / 2 - 10, y - 5);
        ctx.fillText(i, x + barWidth / 2 - 5, canvas.height - 55);
    });

}

function insertValue(){
    
}

drawQueue(6,queue.length-1);