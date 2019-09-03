import { getLastMessageTime } from './getLastMessageTime';

it ('returns the last value of the object', () => {
    const messages = [
        {created_at: "2019-08-17 23:30:11"},
        {created_at: "2019-08-17 23:54:45"},
        {created_at: "2019-08-18 10:23:00"}
      ];
    const result = getLastMessageTime(messages);
    
    expect(result).toBe('2019-08-18 10:23:00');
});