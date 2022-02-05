import { GOOGLE_API_KEY } from "../../../utils/config";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import { IlocationProps } from "../../../utils/interfaces";

interface ILocalMapProps {
  location: IlocationProps;
  zoomLevel?: number;
}

// { location, zoomLevel }: ILocalMapProps

const LocalMap = ({ location, zoomLevel }: ILocalMapProps) => {
  return (
    <div>
      <h2 className="block h-20 w-full">Our Locations</h2>
      <div className="h-screen max-h-[80vh] w-full border-2 border-black">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            address={location.address}
          />
          <LocationPin
            lat={23.730924075997564}
            lng={90.38944596963947}
            address={"lalbagh fort"}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default LocalMap;
