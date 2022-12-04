
let BtnAS = document.getElementById("btnActionSolidaire");
BtnAS.addEventListener("click", function () {
    let detailAS = document.querySelector(".detailAS");
    BtnAS.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "L’action solidaire est une action qui vise à aider les personnes en difficulté. Elle est souvent menée par des associations caritatives ou des ONG. Elle peut être financière, matérielle ou humaine. Elle peut être menée à l’échelle locale, nationale ou internationale. Elle peut être menée par des particuliers ou des entreprises.";
    detailAS.appendChild(pDetail);
    pDetail.classList.add("border");
    pDetail.classList.add("border-danger");
});

let btnAI = document.getElementById("btnActionInsertion");
btnAI.addEventListener("click", function () {
    let detailAI = document.querySelector(".detailAI");
    btnAI.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "L’action d’insertion est une action qui vise à aider les personnes en difficulté à retrouver un emploi ou à se former pour trouver un emploi. Elle est souvent menée par des associations caritatives ou des ONG. Elle peut être financière, matérielle ou humaine. Elle peut être menée à l’échelle locale, nationale ou internationale. Elle peut être menée par des particuliers ou des entreprises.";
    detailAI.appendChild(pDetail);
    pDetail.classList.add("border");
    pDetail.classList.add("border-success");
});

let btnAP = document.getElementById("btnActionPrevention");
btnAP.addEventListener("click", function () {
    let detailAP = document.querySelector(".detailAP");
    btnAP.style.display = "none";
    let pDetail = document.createElement("p");
    pDetail.textContent =
        "L’action de prévention est une action qui vise à éviter que les personnes ne soient en difficulté. Elle est souvent menée par des associations caritatives ou des ONG. Elle peut être financière, matérielle ou humaine. Elle peut être menée à l’échelle locale, nationale ou internationale. Elle peut être menée par des particuliers ou des entreprises.";
    detailAP.appendChild(pDetail);
    pDetail.classList.add("border");
    pDetail.classList.add("border-info");
});
