/*
Configuration
------------------------
If something doesn't work please contact me on discord (Astronawta#0012).
*/

const config = {
    serverInfo: {
        serverLogoImageFileName: "logo.png", /*This is a file name for logo in /images/ (If you upload new logo with other name, you must change this value)*/
        serverName: "Canadian-Greenlandic Empire", /*Server name*/
        server_Ip: "play.ccnetmc.com",
        serverIp: "The Imperial North", /*Server IP (if you want to add online user counter, you must have true the enable-status and enable-query of server.properties)*/
        discordServerID: "1189680344702656573" /*Your server ID (if you want to add online user counter, you must have enabled Discord server widget)*/
    },

    /*Admin-Team
    ------------
    If you want to create new group, you must add this structure to adminTeamPage:
    <nameOfGroup>: [
        {
            inGameName: "Astronavta",
            rank: "Owner",
            skinUrlOrPathToFile: "",
            rankColor: ""
        },
    ]
    then you must add this group with same name to atGroupsDefaultColors and set the color you want for the group.
    You can also set a special color for a specific user, just put it in the rankColor of that user.

    All skins for original players are generate automaticaly. If you want to add skins to warez players, yout must add url for skin to skinUrlOrPathToFile
        {
            inGameName: "Astronavta",  <--- In-Game name
            rank: "Owner",  <-- rank
            skinUrlOrPathToFile: "",  <-- url or file path for skin image for warez players (if you have original minecraft leave it be empty)
            rankColor: "rgba(255, 3, 3, 1)"  <-- special rank color
        },

    If you want to change skin type replace userSKinTypeInAdminTeam with something you want from array in comments
    */
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

/*If you want to change website color go to /css/global.css and in :root {} is a color pallete (don't change names of variables, change only values)*/
















/*If you want everything to work as it should and you don't understand what is written here, don't touch it :D*/


/*FAQs*/
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", () => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;

        if(accordionItemHeader.classList.contains("active")) accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        else accordionItemBody.style.maxHeight = "0px";
    });
});

/*Config navbar*/
/*Config contact*/

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
    /*Set config data to navbar*/

    /*Set config data to header*/

    let locationPathname = location.pathname;

    if(locationPathname.includes("leadership")) {
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
}

setDataFromConfigToHtml();