const $pr_template = document.getElementById("pr_template_pr").content,
    $pr_template_sec = document.getElementById("pr_template_sec").content,
    $pr_container = document.getElementById("pr_container"),
    $pr_contaienr_sec = document.getElementById("pr_container_sec"),
    $fragment_pr = document.createDocumentFragment(),
    $fragment_sec = document.createDocumentFragment(),
    pr_info_pr = [
        {
            nombre: "RAZER HAMMERHEAD HYPERSPEED",
            detalle: "JUEGA DONDE QUIERAS. LLÉVALOS A CUALQUIER PARTE",
            img: "img/razer-hammerhead-hyperspeed-playstation-homepage-desktop1x.jpg",
        },
        {
            nombre: "RAZER KIYO PRO ULTRA",
            detalle: "EL MAYOR SENSOR JAMÁS INCLUIDO EN UNA CÁMARA WEB",
            img: "img/kiyo-pro-ultra-homepage-desktop.jpg",
        },
        {
            nombre: "RAZER WOLVERINE V2 PRO",
            detalle: "CONECTA. CONTROLA. CONQUISTA.",
            img: "img/razer-wolverine-v2-pro-black-white-homepage-desktop1x.jpg",
        },
    ],
    pr_info_sec = [
        {
            nombre: "RAZER NAGA V2 PRO",
            detalle: "ADÁPTATE Y LIBERA TU POTENCIAL",
            img: "img/razer-naga-v2-pro-950x580-desktop.jpg",
        },
        {
            nombre: "RAZER DEATHSTALKER V2 PRO",
            detalle: "ERGONOMÍA DE BAJO PERFIL. CONEXIÓN INALÁMBRICA DE ALTO RENDIMIENTO.",
            img: "img/deathstalker-v2-pro-white-950x580-desktop.jpg",
        },
        {
            nombre: "RAZER QUARTZ, MERCURY & WHITE",
            detalle: "ATREVIDO. ACTUAL. LIMPIO.",
            img: "img/razer-quartz-mercury-white-homepage-b-950x580-desktop.jpg",
        },
        {
            nombre: "RRAZER BASILISK V3 PRO",
            detalle: "NUESTRO RATÓN GAMING MÁS AVANZADO HASTA LA FECHA",
            img: "img/razer-basilisk-v3-pro-white-b-950x580-desktop.jpg",
        },
        {
            nombre: "RAZER LEVIATHAN V2 X",
            detalle: "ILUMINA TU SONIDO",
            img: "img/leviathanv2-x-b-950x580-desktop.jpg",
        },
        {
            nombre: "RAZER BLACKSHARK V2 X USB",
            detalle: "EL SONIDO DE LOS ESPORTS",
            img: "img/razer-blackshark-v2-x-usb-950x580-desktop.jpg",
        },
];

pr_info_pr.forEach(el => {
    $pr_template.querySelector("img").setAttribute("src",el.img);
    $pr_template.querySelector("h3").textContent = el.nombre;
    $pr_template.querySelector("p").textContent = el.detalle;
    
    let $clone = document.importNode($pr_template, true);
    $fragment_pr.appendChild($clone);
});
$pr_container.appendChild($fragment_pr);

pr_info_sec.forEach(el => {
    $pr_template.querySelector("img").setAttribute("src",el.img);
    $pr_template.querySelector("h3").textContent = el.nombre;
    $pr_template.querySelector("p").textContent = el.detalle;
    
    let $clone = document.importNode($pr_template, true);
    $fragment_sec.appendChild($clone);
});

$pr_contaienr_sec.appendChild($fragment_sec);

//NAV BAR
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav_bar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}