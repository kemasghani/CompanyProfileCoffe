// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
}

// Define the language reload anchors
var language = {
    eng0: "English",
    ind0: "Indonesia",

    eng1: "Home",
    ind1: "Beranda",

    eng2: "About sabar",
    ind2: "Tentang sabar",

    eng3: "Menu",
    ind3: "Menu",

    eng4: "Gallery",
    ind4: "Galeri",

    eng5: "Contact us",
    ind5: "Hubungi kami",

    eng6: "Sabar location",
    ind6: "Lokasi sabar",
};

// Check if a hash value exists in the URL
if (window.location.hash) {
    // Set the content of the webpage
    // depending on the hash value
    if (window.location.hash == "#eng") {
        document.getElementById("tentang").innerHTML = "About sabar";
        document.getElementById("hubungi").innerHTML = "Contact us";
        document.getElementById("beranda").innerHTML = "Home";
        document.getElementById("map").innerHTML = "Sabar location";
        document.getElementById("map2").innerHTML = "Sabar location";
        document.getElementById("label").innerHTML = "English";
        document.getElementById("tentang1").innerHTML = "About sabar";
        document.getElementById("beranda1").innerHTML = "Home";
        document.getElementById("tittle1").innerHTML = "Quick link";
        document.getElementById("tittle2").innerHTML = "Kontak & Media sosial";
        document.getElementById("tittleMenu").innerHTML = "Our Menu";
        document.getElementById("text1").innerHTML = "Hello Sabar's friend, let's stop by to be able to share stories and eliminate fatigue. We waiting for you :)";
        document.getElementById("tenang").innerHTML = "- Calm, Control";
        document.getElementById("tittleMenu1").innerHTML = "About Sabar";
    }
}