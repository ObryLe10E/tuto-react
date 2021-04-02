import * as React from "react";
import Row, { Person } from "./row";
import people from "./data";

interface Props {
  param?: string;
}

const Compo = ({ param }: Props) => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    // fetch("https://fakerapi.it/api/v1/persons?_quantity=10")
    //   .then((response) => response.json())
    //   .then((result) => setData(result.data));
    setData(people.data);
  }, []);

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Majorité</th>
          </tr>
          {data.map((e) => {
            const p: Person = {
              firstname: e.firstname,
              lastname: e.lastname,
              birthday: e.birthday
            };
            return <Row person={p} search={param}></Row>;
          })}
        </tbody>
      </table>
    </>
  );
};
export default Compo;
