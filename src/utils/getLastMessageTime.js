//The function is required to get the date and time of the last message
export const getLastMessageTime = messages => {
  const lastMesage = messages.length - 1;
    if (messages[lastMesage]) {
      return messages[lastMesage].created_at
    }
}