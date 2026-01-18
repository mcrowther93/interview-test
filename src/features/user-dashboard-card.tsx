import { useState } from "react";
import Badge from "../components/badge";
import Button from "../components/button";
import Card from "../components/card";
import type { User } from "../data/users";

import "./user-dashboard-card.css";
import { UserDetails } from "./user-dashboard-details";

export interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {

  const [isDetailsOpen, setIsDetailsOpen] =useState(false);

  function handleOpenDetails() {
    setIsDetailsOpen(true);
  }

  function handleCloseDetails() {
    setIsDetailsOpen(false)
  }

  return (
    <>
    <Card>
      <Card.Header>
        <Badge
          className="user-dashboard-card-badge "
          variant={user.role}
          title={user.role.toUpperCase()}
        />
        <h3 className="title-m font-color-secondary">{user.name}</h3>
        <div className="text-m font-color-primary">{user.title}</div>
      </Card.Header>

      <Card.Body className="text-s font-color-primary user-dashboard-card-body ">
        <div className=" user-dashboard-card-info">
          <span className="text-s-light"> Team:</span> <span className="text-s">{user.team}</span>
        </div>

        <div className=" user-dashboard-card-info">
          <span className="text-s-light">Contact information: </span>
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </div>
      </Card.Body>

      <Card.Footer>
        <Button onClick={handleOpenDetails} className="user-dashboard-card-cta">View details</Button>
      </Card.Footer>
    </Card>
  
    <UserDetails onClose={handleCloseDetails} isOpen={isDetailsOpen} user={user} />
  </>
  );
}
