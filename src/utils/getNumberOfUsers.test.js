import { getNumberOfUsers } from './getNumberOfUsers';

it ('returns number of unic users', () => {
    const users = [
        {user: "Kate"},
        {user: "Dave"},
        {user: "Taylor"},
        {user: "Dave"},
        {user: "Kim"},
        {user: "Dave"},
        {user: "Kate"},
        {user: "Dave"},
        {user: "Taylor"}
      ];
    const result = getNumberOfUsers(users);
    
    expect(result).toBe(4);
});