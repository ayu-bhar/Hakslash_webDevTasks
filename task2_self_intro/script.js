let curr = -1; // to track if the desired box is pressed or not
function eventAdder() {
    //adding event to navigate bar to take us there where it is supposed to
    let a = document.querySelector(".nav-content").getElementsByTagName('li');
    a[0].addEventListener("click", ()=>{
        document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
    });
    a[1].addEventListener("click", ()=>{
        document.querySelector(".myIntro").scrollIntoView({ behavior: "smooth" });
    });
    a[2].addEventListener("click", ()=>{
        document.querySelector(".myServices").scrollIntoView({ behavior: "smooth" });
    });
    a[3].addEventListener("click", ()=>{
        document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
    });
    a[4].addEventListener("click", ()=>{
        document.querySelector(".sources").scrollIntoView({ behavior: "smooth" });
    });

    let x = document.getElementsByClassName("source-box");
    let y = document.getElementsByClassName("nav-inner-circle");
    let z = document.getElementsByClassName("button-work");
    // adding events on sorce boxes and its navigation circles to show effect when clicked
    for (let i = 0; i < 3; i++) {
        x[i].addEventListener("click", () => {
            if (curr != i) {
                if (curr >= 0) {
                    x[curr].classList.remove("change-color");
                    y[curr].classList.remove("animation");
                }
                curr = i;
                x[i].classList.add("change-color");
                y[curr].classList.add("animation");
            }
            else {
                x[i].classList.remove("change-color");
                y[curr].classList.remove("animation");
                curr =-1;
            }

        });
        y[i].addEventListener("click",()=>{
            if (curr != i) {
                if (curr >= 0) {
                    x[curr].classList.remove("change-color");
                    y[curr].classList.remove("animation");
                }
                curr = i;
                x[i].classList.add("change-color");
                y[curr].classList.add("animation");
            }
            else {
                x[i].classList.remove("change-color");
                y[curr].classList.remove("animation");
                curr =-1;
            }
        });
        y[i].addEventListener("mouseover",()=>{
            y[i].style.backgroundColor = "yellow";
        });
        y[i].addEventListener("mouseout",()=>{
            y[i].style.backgroundColor = "";
        });
    }
    // adding event on work with me button to navigate us to my linked in page 
    for(let i = 0;i<z.length ;i++){
        z[i].addEventListener("click",()=>{
            window.location.href = "https://www.linkedin.com/in/ayush-bhardwaj-362271325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
        })
    }
}