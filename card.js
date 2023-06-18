function textCounter(field, counterLabel, maxlimit) {
    //get word count label
    var countLbl = document.getElementById(counterLabel);

    //restrict number of characters in textarea 
    if (field.value.length > maxlimit) {
        field.value = field.value.substring(0, maxlimit);
        return false;
    } else {
        //update label
        countLbl.innerText = (maxlimit - field.value.length) + " character(s) remaining";
    }
}

function generateCard() {
    //check if image has been uploaded
    var file = document.getElementById('imageUpload').files[0];

    if (file != null) {
        //show cardHolder div
        document.getElementById("cardHolder").style.display = "block";

        //get values from inputs...
        var nameTxt = document.getElementById("nameTxt").value;
        var bioTxt = document.getElementById("bioTxt").value;

        var interest1 = document.getElementById("interest1").value;
        var interest2 = document.getElementById("interest2").value;
        var interest3 = document.getElementById("interest3").value;
        var interest4 = document.getElementById("interest4").value;
        var interest5 = document.getElementById("interest5").value;

        var instagramTxt = document.getElementById("instagramTxt").value;
        var snapchatTxt = document.getElementById("snapchatTxt").value;
        var facebookTxt = document.getElementById("facebookTxt").value;

        //string for interest spans.
        var interests = "";

        //check to see if interests are blank. if not, create span for each interest listed.
        if (interest1.trim() != "") {
            interests += "<li>" + interest1 + "</li>";
        }
        if (interest2.trim() != "") {
            interests += "<li>" + interest2 + "</li>";
        }
        if (interest3.trim() != "") {
            interests += "<li>" + interest3 + "</li>";
        }
        if (interest4.trim() != "") {
            interests += "<li>" + interest4 + "</li>";
        }
        if (interest5.trim() != "") {
            interests += "<li>" + interest5 + "</li>";
        }

        //string for social spans...
        var socials = "";

        //check to see if socials are blank. if not, create span for each interest listed with fontawesome icons.
        if (instagramTxt.trim() != "") {
            socials += "<span class='bubble'><i class='fa-brands fa-instagram'></i>&nbsp;" + instagramTxt + "</span>";
        }
        if (snapchatTxt.trim() != "") {
            socials += "<span class='bubble'><i class='fa-brands fa-snapchat'></i>&nbsp;" + snapchatTxt + "</span>";
        }
        if (facebookTxt.trim() != "") {
            socials += "<span class='bubble'><i class='fa-brands fa-facebook'></i>&nbsp;" + facebookTxt + "</span>";
        }

        var reader = new FileReader();
        reader.onload = function(e) {
                // the result image data
                //generate card...
                document.getElementById("generatedCard").innerHTML = "<img class='pfp' alt='Failed to load image' src='" + e.target.result + "'/><h1>Bonjour, je m'appelle " + nameTxt + "</h1><hr><h3>" + bioTxt + "</h4><hr><h3>J'aime...</h3><ul>" + interests + "</ul><hr><h3>Suivez-moi sur...</h3><div class='bubbleSection'>" + socials + "</div>"
            }
            // you have to declare the file loading
        reader.readAsDataURL(file);
    } else {
        alert("Veuillez télécharger une image de vous-même.");
    }
}

function saveCard() {
    //create canvas from div
    html2canvas(document.querySelector("#generatedCard")).then(canvas => {
        //create link tag to canvas image and click to download
        var link = document.createElement('a');
        link.download = 'GoFrenchCard.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

function goHome() {
    //navigate to index
    window.location.href = 'index.html';
}