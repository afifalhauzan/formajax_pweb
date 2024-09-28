const chat = document.querySelector('#chat');
const message = document.querySelector('#message');
const sendButton = document.querySelector('#send-button');
const errorMessage = document.querySelector('#error-message');
const baseUrl = 'http://localhost/formajax_pweb/src';

function readChat() {
    fetch(`${baseUrl}/chat-read.php`)
        .then(res => res.text())
        .then(res => {
            chat.value = res;
        });
    setTimeout(readChat, 1000);
}

readChat();

function sendMessage() {  
    if(message.value.trim() === '') {
        errorMessage.classList.remove('hidden');
        return;
    } else {
        errorMessage.classList.add('hidden');
    }

    fetch(`${baseUrl}/chat-write.php`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `message=${encodeURIComponent(message.value)}` 
    });

    message.value = '';
}

message.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        sendMessage();
    }
});

sendButton.addEventListener('click', sendMessage);

