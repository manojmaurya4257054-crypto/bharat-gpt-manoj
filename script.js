const chatBox=document.getElementById('chatBox');
const input=document.getElementById('userInput');
function sendMessage(){
let t=input.value.trim();
if(!t)return;
addMsg(t,'user');
input.value='';
setTimeout(()=>{addMsg(getReply(t),'bot')},600)
}
function addMsg(t,c){
let d=document.createElement('div');
d.className='msg '+c;
d.innerText=t;
chatBox.appendChild(d);
chatBox.scrollTop=chatBox.scrollHeight
}
function getReply(q){
q=q.toLowerCase();
if(q.includes('namaste')||q.includes('hello'))return 'Namaste Manoj bhai! Kaise ho aap? 🙏';
if(q.includes('kaun ho'))return 'Mai Bharat GPT Manoj hu, aapka apna desi AI!';
if(q.includes('bharat'))return 'Bharat Mahan hai! Jai Hind! 🇮🇳';
return 'Aapne pucha: '+q+' - Bahut badhiya sawal hai Manoj bhai!';
}
input.addEventListener('keypress',e=>{if(e.key==='Enter')sendMessage()});
