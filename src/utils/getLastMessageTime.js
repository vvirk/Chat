export const getLastMessageTime = messages => {
  const lastMesage = messages.length - 1;
    if (messages[lastMesage]) {
      return messages[lastMesage].created_at
    }
}