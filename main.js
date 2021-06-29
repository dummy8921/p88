var canvas=new fabric.Canvas("myCanvas");
blockwidtch=30;
blockheight=30;
playrX=10;
playrY=10;
var playrObject="";
var blockObject="";
function playrUpdate()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        playrObject=Img;
        playrObject.scaleToWidth(150);
        playrObject.scaleToHeight(140);
        playrObject.set({
            top:playrY,
            left:playrX
        });
canvas.add(playrObject);
    });
}
function newimage(getimage)
{
    fabric.Image.fromURL(getimage,function(Img)
    {
        blockObject=Img;
        blockObject.scaleToWidth(blockwidtch);
        blockObject.scaleToHeight(blockheight);
        blockObject.set({
            top:playrY,
            left:playrX
        });
canvas.add(blockObject);
    });
}
window.addEventListener("keydown",mykey);
function mykey(e)
{
    keyPress=e.keyCode;
    if(e.shiftKey==true && keyPress=='80')
    {
       blockwidtch=blockwidtch+10;
       blockheight=blockheight+10;
       document.getElementById("Currentwidth").innerHTML=blockwidtch;
       document.getElementById("Currentheight").innerHTML=blockheight;
    }
    if(e.shiftKey==true && keyPress=='77')
    {
       blockwidtch=blockwidtch-10;
       blockheight=blockheight-10;
       document.getElementById("Currentwidth").innerHTML=blockwidtch;
       document.getElementById("Currentheight").innerHTML=blockheight;
    }
    if(keyPress=='82')
    {
        newimage('https://tse1.explicit.bing.net/th?id=OIP.2kMmj-lwDo9eOzIexPbB_AHaJt&pid=Api&P=0&w=300&h=300');
    }
    if(keyPress=='71')
    {
        newimage('https://images.halloweencostumes.ca/products/45969/1-1/power-rangers-mens-green-ranger-costume.jpg');
    }
    if(keyPress=='89')
    {
        newimage('https://tse1.mm.bing.net/th?id=OIP.oWOWPEdJj4D3pyxBlax8mgHaJc&pid=Api&P=0&w=300&h=300');
    }
    if(keyPress=='80')
    {
        newimage('https://tse4.mm.bing.net/th?id=OIP.CfaizpHrrnLWpT1-1j156gHaJ4&pid=Api&P=0&w=300&h=300');
    }
    if(keyPress=='66')
    
        newimage('https://tse3.mm.bing.net/th?id=OIP.xDWfL-Z10ITSFfG1prYPEwAAAA&pid=Api&P=0&w=300&h=300');
    }