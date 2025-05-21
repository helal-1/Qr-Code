const QrInout = document.querySelector(".input input"),
    QrImage = document.querySelector(".QrCodeImage img"),
    qrImage = document.querySelector(".QrCodeImage"),
    btn = document.querySelector(".input button");
btn.addEventListener("click", () => {
    let QrValue = QrInout.value;
    console.log(QrValue);
    if (!QrValue) return;
    btn.innerText = "Generate Qr Code...";
    QrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QrValue}`;

    QrImage.onload = () => {
        btn.innerText = "Generate QR Code";
        qrImage.classList.add("activeQr");
    };
    qrImage.classList.remove("activeQr");
});
const whatsappBtn = document.querySelector(".whatsappBtn");

whatsappBtn.addEventListener("click", () => {
    let QrValue = QrInout.value.trim();
    if (!QrValue) return;
    const message = encodeURIComponent(
        `Hey! Check out this QR code link: ${QrValue}`
    );
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
});
