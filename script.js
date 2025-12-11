async function cevir() {
    const metin = document.getElementById("metin").value;
    const hedef = document.getElementById("hedefDil").value;

    if (!metin) {
        alert("Lütfen çevrilecek metni yazın!");
        return;
    }

    const url = "https://libretranslate.de/translate";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                q: metin,
                source: "auto",   // Kaynak dili otomatik algılar
                target: hedef,
                format: "text"
            })
        });

        if (!response.ok) throw new Error("API isteği başarısız: " + response.status);

        const data = await response.json();
        document.getElementById("sonuc").textContent = data.translatedText;

    } catch (err) {
        console.error(err);
        document.getElementById("sonuc").textContent = "Çeviri sırasında bir hata oluştu. Konsolu kontrol et.";
    }
}
n();

    document.getElementById("sonuc").textContent = data.translatedText;
}
