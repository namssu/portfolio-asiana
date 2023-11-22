// ***include don't touch***
function includeHEADER() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-header");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-header");
                    includeHEADER();

                    // header JS start
                    // 사이드바 오픈
                    let _open = document.querySelector("#openIcon");
                    _open.addEventListener("click", function () {
                        document.body.style.overflow = "hidden";
                        document.querySelector(".navContents").style.width = "100%";
                    });

                    let _close = document.querySelector("#closeIcon");
                    _close.addEventListener("click", function () {
                        document.querySelector(".navContents").style.width = "0%";
                        document.querySelector("#openIcon").style.display = "inlineBlock";
                        document.body.style.removeProperty('overflow');
                    });

                    // 스크롤 시 헤더 영역 고정하기
                    const content = document.querySelector('.content');
                    const wing = document.querySelector('.wing');
                    // 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
                    const contentTop = content.getBoundingClientRect().top + window.scrollY;
                    asianaLogo = document.querySelector(".asiana-logo");

                    window.addEventListener('scroll', function () {
                        if (window.scrollY > contentTop) {
                            wing.classList.add('fixed');
                            asianaLogo.src = "https://flyasiana.com/C/pc/image/common/logo_header.png";
                        } else {
                            wing.classList.remove('fixed');
                            asianaLogo.src = "https://m.flyasiana.com/C/mobile/image/main/img_ci.png";
                        }
                    });
                    // header JS end
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};


function includeFOOTER() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-footer");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-footer");
                    includeFOOTER();

                    // footer JS - 아코디언
                    let acc = document.getElementsByClassName("accordion");
                    let i;

                    for (i = 0; i < acc.length; i++) {
                        acc[i].addEventListener("click", function () {
                            this.classList.toggle("active");
                            var panel = this.nextElementSibling;
                            if (panel.style.maxHeight) {
                                panel.style.maxHeight = null;
                            } else {
                                panel.style.maxHeight = panel.scrollHeight + "px";
                            }
                        });
                    }
                    // footer JS end
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};

 //준비중입니다 알림창
 function openPreparing() {
    alert('준비중입니다.');
}
