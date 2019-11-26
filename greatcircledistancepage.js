
window.onload = function()
{
    writeToConsole("Great Circle Distances<br/>----------------------<br/><br/>", "console");

    let gc_london_tokyo = calcGreatCircle("London", 51.507222, -0.1275, "Tokyo", 35.683333, 139.683333);
    printGreatCircle(gc_london_tokyo);

    let gc_london_new_york = calcGreatCircle("London", 51.507222, -0.1275, "New York", 40.7127, -74.0059);
    printGreatCircle(gc_london_new_york);

    let gc_london_new_delhi = calcGreatCircle("London", 51.507222, -0.1275, "New Delhi", 28.613889, 77.208889);
    printGreatCircle(gc_london_new_delhi);

    let gc_london_sydney = calcGreatCircle("London", 51.507222, -0.1275, "Sydney", -33.865, 151.209444);
    printGreatCircle(gc_london_sydney);

    let gc_london_cape_town = calcGreatCircle("London", 51.507222, -0.1275, "Cape Town", -33.925278, 18.423889);
    printGreatCircle(gc_london_cape_town);

    let gc_london_rio_de_janeiro = calcGreatCircle("London", 51.507222, -0.1275, "Rio de Janeiro", -22.908333, -43.196389);
    printGreatCircle(gc_london_rio_de_janeiro);

    let gc_london_oblivion = calcGreatCircle("London", 51.507222, -0.1275, "Oblivion", 91, 360);
    printGreatCircle(gc_london_oblivion);
}
