import { GrLocation } from "react-icons/gr";
import { IlocationProps } from "../../../utils/interfaces";

const LocationPin = ({ lat, lng, address }: IlocationProps) => {
  return (
    <div className="pin">
      <GrLocation className="pin-icon" />
      <p className="pin-text">{address}</p>
    </div>
  );
};

export default LocationPin;
