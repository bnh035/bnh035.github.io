window.onload=function(){
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    toggleSwitch.addEventListener('change', switchTheme, false);

    const currentTheme = localStorage.getItem('theme');
    image1 = document.getElementById("wobaImage1").src="images/wOBAPlotD.png";
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
      
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }

    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            image1.src = "images/wOBAPlotL.png"
        }
        else {        
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            image1.src = "images/wOBAPlotD.png"
        }    
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
}
