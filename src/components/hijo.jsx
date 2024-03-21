import { useUserContext, useUserToggleContext } from "../providers/UserProvider";
const Hijo = () => {
  const user = useUserContext();
  const cambiaLogin = useUserToggleContext();
  return (
    <div>
      <h1>Hijo</h1>
      <button onClick={cambiaLogin}>Cambiar login</button>
      <p>
        {user ? user.name : "No hay usuario"}
      </p>
    </div>
  );
}
export default Hijo;