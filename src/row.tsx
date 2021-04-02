import * as React from "react";

export interface Person {
  firstname: string;
  lastname: string;
  birthday: string;
}

interface Props {
  person: Person;
  search: string;
}

const Compo = ({
  person,
  person: { firstname, lastname, birthday },
  search
}: Props) => {
  const hasMajority = React.useCallback(() => {
    const split = birthday.split("-");
    return (new Date().getTime() -
      new Date(+split[0], +split[1] - 1, +split[2]).getTime()) /
      31536000000 >=
      18
      ? "Majeur"
      : "Mineur";
  }, [birthday]);

  const isDisplay = () => {
    return !search ||
      search === "" ||
      firstname.toLowerCase().includes(search) ||
      lastname.toLowerCase().includes(search)
      ? ""
      : "none";
  };

  return (
    <>
      <tr style={{ display: isDisplay() }}>
        <td>{firstname}</td>
        <td>{lastname.toUpperCase()}</td>
        <td>{hasMajority()}</td>
      </tr>
    </>
  );
};
export default Compo;
