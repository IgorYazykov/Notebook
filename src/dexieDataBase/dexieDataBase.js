import Dexie from "dexie";

export const db = new Dexie("StoreOfNotes");
db.version(1).stores({
  note: "++id, title, discription"
});