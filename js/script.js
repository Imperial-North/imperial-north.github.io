const config = {
    
    userSKinTypeInAdminTeam: "bust", /*[full, bust, head, face, front, frontFull, skin]*/
    adminTeamPage: {
        leaders: [
            {
                inGameName: "Snasycanuck",
                rank: "Consul",
                skinUrlOrPathToFile: "",
                rankColor: "rgba(255, 3, 3, 1)"
            },
            {
                inGameName: "GillyWillie",
                rank: "Governer General",
                skinUrlOrPathToFile: "",
                rankColor: "rgba(255, 3, 3, 1)"
            },
            {
                inGameName: "OnlyIvanix",
                rank: "Grand Chancellor",
                skinUrlOrPathToFile: "",
                rankColor: "rgba(255, 3, 3, 1)"
            }
        ],
        council: [
            {
                inGameName: "EkkoTheEcho",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "V8LK",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "Micheal__Rosen",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "kitsune234567",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "Mxhmd",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "maruguchi",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "KingAlbus",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "Redactably",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "Jakers1700",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "ImGnomeAlone",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            },
            {
                inGameName: "SilverGalaxy21",
                rank: "Council",
                skinUrlOrPathToFile: "",
                rankColor: "#ff6868"
            }
        ],
        Cabinet: [
            {
                inGameName: "Twoerr",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "Delotris",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "1vy_TheSunLady",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "MagpieMoment_",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "MegalithOfficial",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "MightyGamer",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "Captain_Boo",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "Waldfux",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "o_v_0",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            },
            {
                inGameName: "Neon_City_Lights",
                rank: "Cabinet",
                skinUrlOrPathToFile: "",
                rankColor: "#fd7474"
            }
        ],
        Premiers: [
            {
                inGameName: "OnlyIvanix",
                rank: "Premier of Greenland",
                skinUrlOrPathToFile: "",
                rankColor: "#a610ee"
            }
        ]
    }
}

const getUuidByUsername = async (username) => {
    try {
        const usernameToUuidApi = `https://api.minetools.eu/uuid/${username}`;
        let response = await fetch(usernameToUuidApi);
        let data = await response.json();

        return data.id;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

const getSkinByUuid = async (username) => {
    try {
        const skinByUuidApi = `https://visage.surgeplay.com/${config.userSKinTypeInAdminTeam}/512/${await getUuidByUsername(username)}`;
        let response = await fetch(skinByUuidApi);

        if(response.status === 400) return `https://visage.surgeplay.com/${config.userSKinTypeInAdminTeam}/512/ec561538f3fd461daff5086b22154bce`;
        else return skinByUuidApi;
    } catch (e) {
        console.log(e);
        return "None";
    }
}

const setDataFromConfigToHtml = async () => {

        for (let team in config.adminTeamPage) {
            const atContent = document.querySelector(".at-content");
            
            const group = document.createElement("div");
            group.classList.add("group");
            group.classList.add(team);

            const groupSchema = `
                <h2 class="rank-title">${team.charAt(0).toUpperCase() + team.slice(1)}</h2>
                <div class="users">
                </div>
            `;

            group.innerHTML = groupSchema;

            atContent.appendChild(group);

            for (let j = 0; j < config.adminTeamPage[team].length; j++) {
                let user = config.adminTeamPage[team][j];
                const group = document.querySelector("." + team + " .users");

                const userDiv = document.createElement("div");
                userDiv.classList.add("user");

                let userSkin = config.adminTeamPage[team][j].skinUrlOrPathToFile;

                if(userSkin == "") userSkin = await getSkinByUuid(user.inGameName);

                if(user.rankColor != "") {
                    rankColor = user.rankColor;
                }

                const userDivSchema = `
                    <img src="${await (userSkin)}" alt="${user.inGameName}">
                    <h5 class="name">${user.inGameName}</h5>
                    <p class="rank ${team}" style="background: ${rankColor}">${user.rank}</p>  
                `;

                userDiv.innerHTML = userDivSchema;
                group.appendChild(userDiv);
            }
    }
}

setDataFromConfigToHtml();