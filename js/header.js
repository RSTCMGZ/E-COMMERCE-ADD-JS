function sidebarFunc() {
    //! home sidebar start
    const btnOpenSidebar = document.querySelector("#btn-menu")
    const sidebar = document.querySelector("#sidebar")
    const btnCloseSidebar = document.querySelector("#close-sidebar")

    //? click outside start
    btnOpenSidebar.addEventListener(("click"), () => {
        sidebar.style.left = "0"
    })
    btnCloseSidebar.addEventListener(("click"), () => {
        sidebar.style.left = "-100%"
    })


    document.addEventListener(("click"), (e) => {
        if (!e.composedPath().includes(sidebar) && !e.composedPath().includes(btnOpenSidebar)) {
            sidebar.style.left = "-100%"
        }
    })
    //? click outside end

    //! home sidebar end
}

function searchModalFunc() {
    //! search  modal start

    const btnOpenSearch = document.querySelector(".search-button")
    const modalSearch = document.getElementsByClassName("modal-search")
    const btnCloseSearch = document.getElementById("close-search")
    const modalSearchWrapper = document.getElementsByClassName("modal-wrapper")


    btnOpenSearch.addEventListener(("click"), () => {
        modalSearch[0].style.visibility = "visible"
        modalSearch[0].style.opacity = "1"
    })

    btnCloseSearch.addEventListener(("click"), () => {
        modalSearch[0].style.visibility = "hidden"
        modalSearch[0].style.opacity = "0"
    })

    //? click outside start

    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(modalSearchWrapper[0]) &&
            !e.composedPath().includes(btnOpenSearch)
        ) {
            modalSearch[0].style.visibility = "hidden"
            modalSearch[0].style.opacity = "0"


        }
    })

    //? clic1k outside end


    //! search  modal end
}

function headerFunc() {
    sidebarFunc()
    searchModalFunc()
}

export default headerFunc();