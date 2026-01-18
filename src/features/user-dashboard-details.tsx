import Badge from "../components/badge";
import Button from "../components/button";
import Modal from "../components/modal"
import type { User } from "../data/users";

import "./user-dashboard-details.css";

export interface UserDetailsProps {
  user: User;
  isOpen: boolean;
  onClose: () => void;

}

export function UserDetails({ user,isOpen,onClose }: UserDetailsProps) {
  return (
    <Modal  open={isOpen} onClose={onClose}>
      <Modal.Header>
        <Badge
          className="user-dashboard-details-badge "
          variant={user.role}
          title={user.role.toUpperCase()}
        />
        <h3 className="title-m font-color-secondary">{user.name}</h3>
        <div className="text-l font-color-primary">{user.title}</div>
      </Modal.Header>

      <Modal.Body className="text-s font-color-primary user-dashboard-details-body ">
        <div className=" user-dashboard-details-info">
          <span className="text-m"> Team:</span> <span className="text-m-medium">{user.team}</span>
        </div>

        <div className=" user-dashboard-details-info">
          <span className="text-m">Contact information: </span>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>


        <div className=" user-dashboard-details-info">
          <span className="text-m">Other Details: </span>
           <p className="text-m-medium">{user.details}</p>
        </div>

      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClose} className="user-dashboard-details-cta">Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
