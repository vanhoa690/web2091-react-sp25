import { useParams } from "react-router-dom";
import { useOne } from "../../hooks/useOne";

function ProductEdit() {
  const { id } = useParams();
  const { data } = useOne({ resource: "products", id });
  console.log(data);

  return <div>ProductEdit</div>;
}

export default ProductEdit;
