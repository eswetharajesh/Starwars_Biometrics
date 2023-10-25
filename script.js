document.getElementById("fetchButton").addEventListener("click", getApi);

function getApi() {
    const characterName = document.getElementById("characterName").value;

    if (characterName.trim() === "") {
        alert("Please enter a character name.");
        return;
    }

    const fullUrl = `https://www.swapi.tech/api/people/?name=${characterName}`;

    fetch(fullUrl)
        .then((res) => res.json())
        .then((data) => {
            if (data.result && data.result.length > 0) {
                const character = data.result[0];
                const properties = character.properties;

                let characterInfo = `${characterName} Biometric Data:\n\n`;

                for (const prop in properties) { // loops through all properties to display all
                    characterInfo += `${prop}: ${properties[prop]}\n`;
                }

                document.getElementById("output").textContent = characterInfo;
            } else {
                document.getElementById("output").textContent = "Character not found.";
            }
        })
        .catch((err) => console.log(err));
}
