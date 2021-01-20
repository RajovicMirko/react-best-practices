import "./Home.css";
import { useContext } from "react";
import AuthContext from "context/Auth";

const data = [
  { id: "1", text: "Mirko's text" },
  { id: "2", text: "Some text" },
  { id: "1", text: "Mirko's text2" },
  { id: "3", text: "Some text" },
  { id: "1", text: "Mirko's text3" },
  { id: "2", text: "Some text" },
  { id: "1", text: "Mirko's text4" },
  { id: "3", text: "Some text" },
  { id: "1", text: "Mirko's text5" },
];

function Home() {
  const { user, Can, MODULES } = useContext(AuthContext);

  const userCanSeeActions = (dynamicCheckData) =>
    Can({
      perform: [MODULES.home.list.edit, MODULES.home.list.delete],
      dynamicCheckData,
    });

  const handleEdit = (data) => {
    console.log(data);
  };
  const userCanEdit = (dynamicCheckData, row) =>
    Can({
      perform: MODULES.home.list.edit,
      dynamicCheckData,
      yes: () => <button onClick={() => handleEdit(row)}>Edit</button>,
    });

  const handleDelete = (data) => {
    console.log(data);
  };
  const userCanDelete = (dynamicCheckData, row) =>
    Can({
      perform: MODULES.home.list.delete,
      dynamicCheckData,
      yes: () => <button onClick={() => handleDelete(row)}>Delete</button>,
    });

  return (
    <>
      <h2>Home page</h2>

      {Can({
        perform: MODULES.home.list.view,
        yes: () => (
          <ul>
            {data.map((row, i) => {
              const asOwnerCheckDataObject = {
                id: user.id,
                ownerId: row.id,
              };

              return (
                <li key={row.id + i}>
                  <span>User id: {row.id}</span>
                  <span>Row text: {row.text}</span>
                  {userCanSeeActions(asOwnerCheckDataObject) && (
                    <div className="actions">
                      {userCanEdit(asOwnerCheckDataObject, row)}
                      {userCanDelete(asOwnerCheckDataObject, row)}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        ),
      })}
    </>
  );
}

export default Home;
