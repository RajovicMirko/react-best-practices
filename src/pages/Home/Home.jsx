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

      {Can({
        perform: MODULES.home.list.view,
        yes: () => (
          <ul>
            {data.map((row, i) => {
              return (
                <li key={row.id + i}>
                  {row.text}
                  <div className="actions">
                    {Can({
                      perform: MODULES.home.list.edit,
                      data: { id: user.id, ownerId: row.id },
                      yes: () => <button>Edit</button>,
                    })}

                    {Can({
                      perform: MODULES.home.list.delete,
                      data: { id: user.id, ownerId: row.id },
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
