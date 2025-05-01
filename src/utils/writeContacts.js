import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  const contactsData = JSON.stringify(updatedContacts, undefined, 2);
  await fs.writeFile(PATH_DB, contactsData, 'utf-8');
};
