// ==UserScript==
// @name         Eljur Painter
// @namespace    eljur
// @version      2024-12-03
// @description  Paint makrs in eljur
// @author       doctorixx
// @match        https://edu.gounn.ru/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gounn.ru
// @grant        none
// ==/UserScript==

(async function() {
    'use strict';

    const action = () => {
        const colors = {
            1: "rgba(255, 0, 0, 0.2)",
            2: "rgba(204, 51, 51, 0.4)",
            3: "orange",
            4: "rgb(64 255 89 / 40%)",
            5: "teal",
        }

        const set_white_font = [5]

        const cells = document.querySelectorAll('div.cell');
        cells.forEach(cell => {

            const cellText = cell.textContent.trim();


            const isFloat = /\d+$/.test(cellText);

            console.log(cellText)

            if (isFloat) {

                const intValue = Math.round(parseFloat(cellText));

                cell.style.backgroundColor = colors[intValue];

                if (set_white_font.includes(intValue)) {
                    cell.style.color = "white"
                }

            }
        });
    }

    await setTimeout(action, 1000)

})();
