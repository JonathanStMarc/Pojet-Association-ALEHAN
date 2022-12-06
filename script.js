//Detail card presentation on click
let BtnAS = document.getElementById("btnActionSolidaire");
BtnAS.addEventListener("click", function () {
    let detailAS = document.querySelector(".detailAS");
    BtnAS.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "L’action solidaire est une action qui vise à aider les personnes en difficulté. Elle est souvent menée par des associations caritatives ou des ONG. Elle peut être financière, matérielle ou humaine. Elle peut être menée à l’échelle locale, nationale ou internationale. Elle peut être menée par des particuliers ou des entreprises.";
    detailAS.appendChild(pDetail);
    pDetail.classList.add(
        "border",
        "text-bg-danger",
        "border-danger",
        "border-3",
        "rounded-4",
    );
});

let btnAI = document.getElementById("btnActionInsertion");
btnAI.addEventListener("click", function () {
    let detailAI = document.querySelector(".detailAI");
    btnAI.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "L’action d’insertion est une action qui vise à aider les personnes en difficulté à retrouver un emploi ou à se former pour trouver un emploi. Elle est souvent menée par des associations caritatives ou des ONG. Elle peut être financière, matérielle ou humaine. Elle peut être menée à l’échelle locale, nationale ou internationale. Elle peut être menée par des particuliers ou des entreprises.";
    detailAI.appendChild(pDetail);
    pDetail.classList.add(
        "border",
        "text-bg-dark",
        "text-color-white",
        "border-dark",
        "border-3",
        "rounded-4",
    );
});

let btnAP = document.getElementById("btnActionPrevention");
btnAP.addEventListener("click", function () {
    let detailAP = document.querySelector(".detailAP");
    btnAP.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "L’action de prévention est une action qui vise à éviter que les personnes ne soient en difficulté. Elle est souvent menée par des associations caritatives ou des ONG. Elle peut être financière, matérielle ou humaine. Elle peut être menée à l’échelle locale, nationale ou internationale. Elle peut être menée par des particuliers ou des entreprises.";
    detailAP.appendChild(pDetail);
    pDetail.classList.add(
        "border",
        "text-bg-success",
        "border-success",
        "border-3",
        "rounded-4",
    );
});

// Detail Evenement card on click
let btnCardEvent1 = document.getElementById("btnCardEventCouscous");
btnCardEvent1.addEventListener("click", function () {
    let detailCardEvent1 = document.querySelector(".detailCardEvent1");
    btnCardEvent1.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "Description détaillé de l'évènement couscous. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";
    detailCardEvent1.appendChild(pDetail);
});

let btnCardEvent2 = document.getElementById("btnCardEventNage");
btnCardEvent2.addEventListener("click", function () {
    let detailCardEvent2 = document.querySelector(".detailCardEvent2");
    btnCardEvent2.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "Description détaillé de l'évènement nage et plongée. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";
    detailCardEvent2.appendChild(pDetail);
});
