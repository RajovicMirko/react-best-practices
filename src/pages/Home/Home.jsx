import "./Home.css";
import usePages from "hooks/usePages";

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
  const {
    Can,
    MODULES,
    auth: { user },
  } = usePages();

  return (
    <>
      <h2>Home page</h2>
      <div className="sub-title">
        {Can({
          perform: MODULES.home.guest,
          yes: () => <h4>Guest can see</h4>,
        })}
        {Can({
          perform: MODULES.home.user,
          yes: () => <h4>User {user.name || "name-empty"} can see</h4>,
        })}
        {Can({
          perform: MODULES.home.admin,
          yes: () => <h4>Admin can see</h4>,
        })}
      </div>

      {Can({
        perform: MODULES.home.list,
        yes: () => (
          <ul>
            {data.map((row, i) => {
              return (
                <li key={row.id + i}>
                  {row.text}
                  <div className="actions">
                    {Can({
                      perform: MODULES.home.list.edit,
                      data: { userId: user.id, ownerId: row.id },
                      yes: () => <button>Edit</button>,
                    })}

                    {Can({
                      perform: MODULES.home.list.delete,
                      data: { userId: user.id, ownerId: row.id },
                      yes: () => <button>Delete</button>,
                    })}
                  </div>
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
