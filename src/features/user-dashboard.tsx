import Badge from "../components/badge";
import Button from "../components/button";

export function UserDashboard(){
    return <main>
        <Button size="m"> Hello </Button>
        <Button size="l"> Hello </Button>
        <br />

        <Badge variant="admin"> Admin</Badge>        <br />
        <Badge variant="editor"> Admin</Badge>        <br />
      <Badge variant="guest"> Admin</Badge>         <br />
      <Badge variant="viewer"> Admin</Badge>        <br />
      <Badge variant="deactivated"> Deactivated</Badge>   
    </main>
}