function clearDefinitions() {
    document.getElementById("result").innerHTML = ""; 
}

function showLoading() {
    document.getElementById("result").innerHTML = '<img src="loading.gif" alt="Loading..." />';
}

function showError(message) {
    document.getElementById("result").innerHTML = `<p>${message}</p>`;
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("lookup").addEventListener("click", function () {
        clearDefinitions();
        showLoading();

        var term = encodeURIComponent(document.getElementById("term").value);
        var APIurl = "http://localhost/CMSC121-A7-Yao_SJ/urban.php?term=" + term + "&all";

        fetch(APIurl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(xmlText => {
                var parsetxt = new DOMParser();
                var docTypeXML = parsetxt.parseFromString(xmlText, "text/xml");
                var UserEntry = docTypeXML.querySelectorAll("entry");

                if (UserEntry.length === 0) {
                    throw new Error("Sorry, no entry was found within the XML data");
                }

                var resultList = document.createElement("ol");

                UserEntry.forEach(entry => {
                    var displayList = document.createElement("li");
                    var defineQuery = entry.querySelector("definition").textContent;
                    var exampleQuery = entry.querySelector("example").textContent;
                    var authorAttribute = entry.getAttribute("author") || "Author does not exist.";

                    displayList.innerHTML = `
                        <p>${defineQuery}</p>
                        <p><i>${exampleQuery}</i></p>
                        <p>- ${authorAttribute}</p>
                    `;

                    resultList.appendChild(displayList);
                });

                clearDefinitions(); 
                document.getElementById("result").appendChild(resultList);
            })
            .catch(error => {
                console.error("Error in fetching definitions: ", error);
                clearDefinitions(); 
                showError("Sorry, the word cannot be found in the dictionary.");
            });
    });
});