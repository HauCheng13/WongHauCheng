
// Opening and closing Modals

const openModal = (modalID) => {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

}

const closeModal = (modalID) => {
    const modal = document.getElementById(modalID);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
    };


    window.addEventListener('click', function (event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow= '';
            }
        });
    });


    //For clock and updating time

    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const string = `${hours}:${minutes}:${seconds}`
        document.getElementById("clock").textContent = string;
    }
    

    setInterval(updateTime, 1000);
    updateTime(); 


     let lastScrollY = window.scrollY;

     window.addEventListener("scroll", () => {
        const navbar = document.getElementById("top-navbar");
        if (window.scrollY === 0) {
            navbar.classList.remove("hide");
        }
        else {
            navbar.classList.add("hide");
        }
    });

    

