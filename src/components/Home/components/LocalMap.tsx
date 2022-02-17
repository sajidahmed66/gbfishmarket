import { GOOGLE_API_KEY, GOOGLE_MAP_ID } from "../../../utils/config";
import GoogleMapReact from "google-map-react";
// import LocationPin from "./LocationPin";
import { IlocationProps } from "../../../utils/interfaces";

interface ILocalMapProps {
  location: IlocationProps;
  zoomLevel?: number;
}

// { location, zoomLevel }: ILocalMapProps

const LocalMap = ({ location, zoomLevel }: ILocalMapProps) => {
  return (
    <div>
      <h2 className="flex h-28 w-full items-center justify-center font-dancingScript text-6xl font-bold my-20 ">
        Our Locations
      </h2>
      <div className="h-screen max-h-[80vh] w-full border-2 border-black">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={{
            mapId: GOOGLE_MAP_ID,
          }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            const marker = new maps.Marker({
              position: location,
              map,
              title: "Pallabi",
            });
            const infowindow = new maps.InfoWindow({
              content: "Pallabi",
            });
            marker.addListener("mouseover", () => {
              infowindow.open(map, marker);
            });
            marker.addListener("mouseout", () => {
              infowindow.close(map, marker);
            });

            const marker2 = new maps.Marker({
              position: { lat: 23.730924075997564, lng: 90.39370078740157 },
              map,
              title: "another location",
            });
            const infowindow2 = new maps.InfoWindow({
              content: "another location",
            });
            marker2.addListener("mouseover", () => {
              infowindow2.open(map, marker2);
            });
            marker2.addListener("mouseout", () => {
              infowindow2.close(map, marker2);
            });
          }}
        ></GoogleMapReact>
      </div>
    </div>
  );
};

export default LocalMap;
