import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/action";

const Fetchdata = () => {
  const isLoading = useSelector((store) => store.isLoading);
  const error = useSelector((store) => store.error);
  const data = useSelector((store) => store.data);

  const dispatch = useDispatch();

  console.log(data);

  return (
    <>
      {" "}
      <button onClick={() => dispatch(getData)}>GET DATA</button>
      {isLoading ? (
        <h1>Loading ...</h1>
      ) : error ? (
        <h1>An Error Occured Try again...</h1>
      ) : (
        <div className="userList">
          {data.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Fetchdata;
