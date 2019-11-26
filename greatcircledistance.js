
const DEGREES_IN_RADIAN = 57.29577951
const MEAN_EARTH_RADIUS_KM = 6371
const KILOMETRES_IN_MILE = 1.60934


function calcGreatCircle(name1,latitude1_degrees, longitude1_degrees, name2, latitude2_degrees, longitude2_degrees)
{
    const gc = {};

    gc.name1 = name1;
    gc.name2 = name2;
    gc.latitude1_degrees = latitude1_degrees;
    gc.longitude1_degrees = longitude1_degrees;
    gc.latitude2_degrees = latitude2_degrees;
    gc.longitude2_degrees = longitude2_degrees;

    gc.latitude1_radians = 0;
    gc.longitude1_radians = 0;
    gc.latitude2_radians = 0;
    gc.longitude2_radians = 0;
    gc.central_angle_radians = 0;
    gc.central_angle_degrees = 0;
    gc.distance_kilometres = 0;
    gc.distance_miles = 0;
    gc.valid = true;

    validateDegrees(gc);

    if(gc.valid)
    {
        calculateRadians(gc);
        calculateCentralAngle(gc);
        calculateDistance(gc);
    }

    return gc;
}


function printGreatCircle(gc)
{
    if(gc.valid)
    {
        writeToConsole(`${gc.name1}<br/>${"-".repeat(gc.name1.length)}<br/>`, "console");
        writeToConsole(`Latitude:  ${gc.latitude1_degrees} degrees / ${gc.latitude1_radians} radians <br/>`, "console");
        writeToConsole(`Longitude: ${gc.longitude1_degrees} degrees / ${gc.longitude1_radians} radians<br/>`, "console");

        writeToConsole(`<br/>${gc.name2}<br/>${"-".repeat(gc.name2.length)}<br/>`, "console");
        writeToConsole(`Latitude: ${gc.latitude2_degrees}  degrees / ${gc.latitude2_radians} radians<br/>`, "console");
        writeToConsole(`Longitude: ${gc.longitude2_degrees} degrees / ${gc.longitude2_radians} radians<br/>`, "console");

        writeToConsole(`<br/>Central Angle ${gc.central_angle_radians} radians / ${gc.central_angle_degrees} degrees<br/>`, "console");

        writeToConsole(`Distance ${gc.distance_kilometres} kilometres / ${gc.distance_miles} miles<br/>`, "console");
    }
    else
    {
        writeToConsole(`Latitude and longitude for ${gc.name1} to ${gc.name2} are invalid<br/>`, "console");
    }

    writeToConsole("====================================================================<br/><br/>", "console");
}


function validateDegrees(gc)
{
    gc.valid = true;

    if(gc.latitude1_degrees < -90.0 || gc.latitude1_degrees > 90.0)
    {
        gc.valid = false;
    }

    if(gc.longitude1_degrees < -180.0 || gc.longitude1_degrees > 180.0)
    {
        gc.valid = false;
    }

    if(gc.latitude2_degrees < -90.0 || gc.latitude2_degrees > 90.0)
    {
        gc.valid = false;
    }

    if(gc.longitude2_degrees < -180.0 || gc.longitude2_degrees > 180.0)
    {
        gc.valid = false;
    }
}


function calculateRadians(gc)
{
    gc.latitude1_radians = gc.latitude1_degrees / DEGREES_IN_RADIAN;
    gc.longitude1_radians = gc.longitude1_degrees / DEGREES_IN_RADIAN;

    gc.latitude2_radians = gc.latitude2_degrees / DEGREES_IN_RADIAN;
    gc.longitude2_radians = gc.longitude2_degrees / DEGREES_IN_RADIAN;
}


function calculateCentralAngle(gc)
{
    let longitudes_abs_diff;

    if(gc.longitude1_radians > gc.longitude2_radians)
    {
        longitudes_abs_diff = gc.longitude1_radians - gc.longitude2_radians;
    }
    else
    {
        longitudes_abs_diff = gc.longitude2_radians - gc.longitude1_radians;
    }

    gc.central_angle_radians = Math.acos(Math.sin(gc.latitude1_radians)
                                       * Math.sin(gc.latitude2_radians)
                                       + Math.cos(gc.latitude1_radians)
                                       * Math.cos(gc.latitude2_radians)
                                       * Math.cos(longitudes_abs_diff));

    gc.central_angle_degrees = gc.central_angle_radians * DEGREES_IN_RADIAN;
}


function calculateDistance(gc)
{
    gc.distance_kilometres = MEAN_EARTH_RADIUS_KM * gc.central_angle_radians;

    gc.distance_miles = gc.distance_kilometres / KILOMETRES_IN_MILE;
}
