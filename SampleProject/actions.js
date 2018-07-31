
export const SAVE_USERS = 'saveUsers';
export function saveUsers(newvalue) {
 
  return {
      type:SAVE_USERS,
      payload: {
          users:newvalue
      }
  }
}