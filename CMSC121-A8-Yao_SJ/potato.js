var WEB_APP = "potato.php";   

document.observe("dom:loaded", function() {
    var checkboxes = $$("#controls input");
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        checkboxes[i].observe("change", toggleAccessory);
    }


    var savedState = getCookie("accessories");
    if (savedState) {
        ajaxGotState({ responseText: savedState });
    }
});


function ajaxGotState(ajax) {
    $("status").innerHTML = "He is wearing: " + ajax.responseText;
    var accessories = getAccessoriesArray(ajax.responseText);
    for (var i = 0; i < accessories.length; i++) {
        if (accessories[i]) {
            $(accessories[i]).checked = true;
            $(accessories[i] + "_image").appear();
        }
    }
}

function toggleAccessory() {
    
    if (this.checked) {
        $(this.id + "_image").appear();
    } else {
        $(this.id + "_image").fade();
    }

    
    var accessoriesString = getAccessoriesString();
    setCookie("accessories", accessoriesString);

    
    setCookie("visitorName", "Anonymous");

    $("status").innerHTML = "He is wearing: " + accessoriesString;
}

function getAccessoriesString() {
    var accessories = [];
    var checkboxes = $$("#controls input");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            accessories.push(checkboxes[i].id);
        }
    }
    return accessories.join(" ");
}

function getAccessoriesArray(accessoriesString) {
    return accessoriesString.split(" ");
}

function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}




