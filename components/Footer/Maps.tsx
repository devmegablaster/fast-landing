import React from "react";
import GoogleMapReact from "google-map-react";

function Maps() {
  return (
    <div className="mapouter relative text-right">
      <div className="gmap_canvas overflow-hidden bg-transparent">
        <iframe
          width="250"
          height="400"
          className="overflow-hidden bg-transparent w-10/12 mx-auto mt-6"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=%20Balhamer%20Business%20Gate,&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
        ></iframe>
      </div>
    </div>
  );
}

export default Maps;
