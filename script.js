async function cevir() {
    const metin = document.getElementById("metin").value;
    const hedef = document.getElementById("hedefDil").value;

    if (!metin) {
        alert("Lütfen çevrilecek metni yazın!");
        return;
    }

    const url = "https://libretranslate.de/translate";

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            q: metin,
            source: "auto",
            target: hedef,
            format: "text"
        })
    });

    const data = await response.json();

    document.getElementById("sonuc").textContent = data.translatedText;
}
