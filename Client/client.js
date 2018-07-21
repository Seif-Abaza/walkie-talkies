const connection = new WebSocket("ws://localhost:12345");
box = document.getElementById('box'),
msg = document.getElementById('msg');
var notification = new Audio('notification2.mp3');

connection.addEventListener('open', () => {
    console.log('connected');
    notification.play();

});


connection.addEventListener('message', e => {
    let p = document.createElement('p');
    p.textContent = e.data;
    box.appendChild(p);
    notification.play();
});

function send (data){
    if(connection.readyState === WebSocket.OPEN){
        connection.send(data);
    }else{
        throw 'not connected';
    }
}

msg.addEventListener('keydown', e => {
    let kc = e.which || e.keyCode;

    if(kc === 13){
        send(msg.value);
        msg.value = '';
    }
});

/* GET IP ADDRESS */

function myIP(){ var vi="uses java to get the users local ip number"
    var yip2=java.net.InetAddress.getLocalHost();	
    var yip=yip2.getHostAddress();
  return yip;
}//end myIP

alert("your machine's local network IP is "+ myIP())