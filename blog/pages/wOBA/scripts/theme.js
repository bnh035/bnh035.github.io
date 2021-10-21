window.onload=function(){
    const toggleImages = document.querySelector('.theme-switch input[type="checkbox"]');
    toggleImages.addEventListener('change', changeImage, false);
    const currentTheme = localStorage.getItem('theme');
    image1 = document.getElementById("wobaImage1").src="images/wOBAPlotD.png";
    if (currentTheme) {
        if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
        }
    }
    function changeImage(e) {
        if (e.target.checked) {
            image1.src = "images/wOBAPlotD.png"
        }
        else {
            image1.src = "images/wOBAPlotL.png"
        }
    }
    toggleSwitch.addEventListener('change', changeImage, false);
}
