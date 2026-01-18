import type { BadgeProps } from "../components/badge";

export type User = {
  id: number;
  name: string;
  role: BadgeProps["variant"];
  title: string;
  team: string;
  email: string;
  details: string;
};

export const mockUsers: User[] = [
  {
    id: 1,
    name: "George Harris",
    role: "admin",
    title: "Software Engineer",
    team: "Security",
    email: "george.harris@example.com",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  {
    id: 2,
    name: "Arianna Russo",
    role: "editor",
    title: "Product Designer",
    team: "Website",
    email: "arianna.russo@example.com",
    details:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 3,
    name: "Marco Esposito",
    role: "viewer",
    title: "Software Engineer",
    team: "Finance",
    email: "marco.esposito@example.com",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    role: "guest",
    title: "Product Designer",
    team: "Security",
    email: "sarah.williams@example.com",
    details:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.",
  },
  {
    id: 5,
    name: "Emma Clark",
    role: "guest",
    title: "Product Manager",
    team: "Marketing",
    email: "emma.clark@example.com",
    details:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 6,
    name: "Victor Barnes",
    role: "viewer",
    title: "Product Manager",
    team: "Finance",
    email: "victor.barnes@example.com",
    details:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Sed quia non numquam eius modi tempora incidunt.",
  },
  {
    id: 7,
    name: "Serena Parisi",
    role: "guest",
    title: "Product Designer",
    team: "Marketing",
    email: "serena.parisi@example.com",
    details:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias.",
  },
];
