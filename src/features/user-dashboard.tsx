import Button from "../components/button";

export function UserDashboard() {
  return (
    <main>
      <div className="title-m"> Title M </div>
      <br />

      <div className="text-s"> Text s </div>
      <br />
      <div className="text-s-light"> Text s light </div>
      <br />
      <div className="text-m"> Text m </div>
      <br />
      <div className="text-l"> Text l </div>
      <br />
      <Button size="m">Medium</Button>
      <Button size="l">Large</Button>
    </main>
  );
}
