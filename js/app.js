(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window.addEventListener("load", windowLoad);
    function windowLoad() {
        document.documentElement.classList.add("loaded");
        createPosition();
        window.addEventListener("scroll", createPosition);
        function createPosition() {
            const contentElement = document.querySelector(".content__container");
            const windowHeight = window.innerHeight;
            const finalPos = scrollY / (contentElement.offsetTop - windowHeight) * 60;
            finalPos < 100 ? forestAnimation(finalPos) : forestAnimation(100);
        }
        function forestAnimation(finalPos) {
            const montains = document.querySelector(".main-screen__montains");
            const trees = document.querySelectorAll(".main-screen__trees");
            const birds = document.querySelectorAll(".main-screen__birds");
            const montainsTranslate = 170 / 100 * finalPos;
            const montainsScale = 1 + 2 / 100 * finalPos;
            montains.style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate3d(0, ${montainsTranslate}%, 0)\n\t\t\t\tscale(${montainsScale})\n\t\t`;
            trees.forEach(((tree, index) => {
                const treeTranslate = 20 * (trees.length - index) / 100 * finalPos;
                const treeScale = 1 + 1.5 / 100 * finalPos;
                tree.style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate3d(0, ${treeTranslate}%, 0)\n\t\t\t\tscale(${treeScale})\n\t\t   `;
            }));
            const birdsTranslate = 190 / 100 * finalPos;
            const birdsScale = 1 + 2 / 100 * finalPos;
            birds[0].style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate3d(-${birdsTranslate}%, 0, 0)\n\t\t\t\tscale(${birdsScale})\n\t\t`;
            birds[1].style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate3d(${birdsTranslate}%, 0, 0)\n\t\t\t\tscale(${birdsScale})\n\t\t`;
        }
    }
    window["FLS"] = true;
    isWebp();
})();