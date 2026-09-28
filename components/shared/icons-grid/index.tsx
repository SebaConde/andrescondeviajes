import { Clock4, Package } from "lucide-react";

const IconGrid = () => {
  return (
    <div className="flex flex-col">
      iconos que redirigen a lugares
      <table className="items-center">
        <tr>
          <td className="bg-yellow-100 ">
            <Clock4 className="hover:bg-green-600"/>
          </td>
          <td>
            <Package />
          </td>
          <td><Package /></td>
        </tr>
      </table>
    </div>
  );
};

export default IconGrid;
