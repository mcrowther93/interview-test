import { mockUsers, type User } from "../data/users";

export function mockApiRequest(term: string) {
  return new Promise<User[]>((resolve, _reject) => {
    setTimeout(() => {
      const filtered = mockUsers.filter((user) =>
        user.name.toLowerCase().includes(term.toLowerCase()),
      );
      resolve(filtered);
      // _reject()
    }, 500);
  });
}
