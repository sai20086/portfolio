const audio = new Audio('assets/sentmessage.mp3');
const contactString = `
<div class='social'>
    <a target='_blank' href='tel:+918600765857'>
        <div class='socialItem' id='call'>
            <img class='socialItemI' src='images/phone.svg'/>
            <label class='number'>8600765857</label>
        </div>
    </a>
    <a href='mailto:patilvinu777@gmail.com'>
        <div class='socialItem'>
            <img class='socialItemI' src='images/gmail.svg' alt=''>
        </div>
    </a>
    <a target='_blank' href='https://github.com/Vinayak-09'>
        <div class='socialItem'>
            <img class='socialItemI' src='images/github.svg' alt=''>
        </div>
    </a>
    <a target='_blank' href='https://wa.me/918600765857'>
        <div class='socialItem'>
            <img class='socialItemI' src='images/whatsapp.svg' alt=''>
        </div>
    </a>
    <a target='_blank' href='https://t.me/vinayak_09'>
        <div class='socialItem'>
            <img class='socialItemI' src='images/telegram.svg' alt=''>
        </div>
    </a>
    <a target='_blank' href='https://instagram.com/vinayak_patil_09'>
        <div class='socialItem'>
            <img class='socialItemI' src='images/instagram.svg' alt=''>
        </div>
    </a>
    <a href='https://www.linkedin.com/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'>
        <div class='socialItem'>
            <img class='socialItemI' src='images/linkedin.svg' alt=''>
        </div>
    </a>
</div>`;

const resumeString = `
<img src='images/resumeThumbnail.png' class='resumeThumbnail'>
<div class='downloadSpace'>
    <div class='pdfname'>
        <img src='images/pdf.png'>
        <label>Vinayak Resume.pdf</label>
    </div>
    <a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'>
        <img class='download' src='images/downloadIcon.svg'>
    </a>
</div>`;

const addressString = `
<div class='mapview'>
    <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238.63833262443757!2d74.19014864534314!3d16.865338763272877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1a7dcf40f5dd7%3A0xd7b69fe1fcfa9877!2zMTbCsDUxJzU1LjQiTiA3NMKwMTEnMjUuMyJF!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe>
</div>
<label class='add'>
    <address>B2 'Asara'<br>Kodoli<br>Kolhapur, Maharashtra, INDIA 416114</address>
</label>`;

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    const date = new Date();
    const lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = `last seen today at ${date.getHours()}:${date.getMinutes()}`;
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    const input = document.getElementById("inputMSG");
    const ti = input.value;
    if (input.value === "") return;

    const date = new Date();
    const myLI = document.createElement("li");
    const myDiv = document.createElement("div");
    const greendiv = document.createElement("div");
    const dateLabel = document.createElement("label");

    dateLabel.innerText = `${date.getHours()}:${date.getMinutes()}`;
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;

    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    document.getElementById("chatting").scrollTop = document.getElementById("chatting").scrollHeight;

    setTimeout(() => waitAndResponce(ti), 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    const lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage(`Hello there 👋🏻 <br>I'm Vinayak Patil, a computer engineering student currently exploring and working on various projects.`);
            }, 1000);
            break;
        case "resume":
            setTimeout(() => {
                sendTextMessage(resumeString);
            }, 1500);
            break;
        case "address":
            setTimeout(() => {
                sendTextMessage(addressString);
            }, 1500);
            break;
        case "contact":
            setTimeout(() => {
                sendTextMessage(contactString);
            }, 1500);
            break;
        case "projects":
            setTimeout(() => {
                sendTextMessage("I'm currently working on various interesting projects. You can check out my GitHub for more details: <a href='https://github.com/Vinayak-09' target='_blank'>GitHub Profile</a>");
            }, 1500);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Sorry, I didn't understand that. You can ask about my resume, address, contact, or projects.");
            }, 1500);
    }
}

function sendTextMessage(response) {
    const date = new Date();
    const receivedLI = document.createElement("li");
    const receivedDiv = document.createElement("div");
    const greydiv = document.createElement("div");
    const dateLabel = document.createElement("label");

    dateLabel.innerText = `${date.getHours()}:${date.getMinutes()}`;
    receivedDiv.setAttribute("class", "received");
    greydiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greydiv.innerHTML = response;

    receivedDiv.appendChild(greydiv);
    receivedLI.appendChild(receivedDiv);
    greydiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(receivedLI);
    document.getElementById("chatting").scrollTop = document.getElementById("chatting").scrollHeight;
    setLastSeen();
}

function playSound() {
    audio.play();
}
