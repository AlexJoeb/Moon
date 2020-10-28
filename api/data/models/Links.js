const db = require('../db-config');
const { v4: uuidv4 } = require('uuid');

export const getAllLinks = async () => {
  let result;
  try {
    result = await db('links').select('*');
    return result;
  } catch (error) {
    console.error({
      message: 'An error occured while fetching all links from database.',
      error,
      error_message: error.message,
    })
    throw Error('An error occured while fetching all links from database.');
  }
}

export const findLinkByFilter = async (filter, first=true) => {
  let result;
  try {
    result = await db('links').where(filter).select('*');
    return !result.length ? null : first ? result[0] : result;
  } catch (error) {
    console.error({
      message: 'An error occured while fetching links by filter.',
      error,
      error_message: error.message,
      filter,
      first
    });
    throw Error('An error occured while fetching links by filter.')
  }
}

export const createLink = async (destination, author) => {
  let result;
  try {
    result = await db('links').insert({
      id: uuidv4(),
      shortid: '',
      destination,
      visits: 0,
      author, // Author should be encrypted with bcryptjs by now.
      expired: 0,
      expire_at: new Date(new Date().getTime() + 8640000).getTime().toString(), // Expires in one day.
    });
    return result;
  } catch (error) {
    console.error({
      message: 'An error occured while inserting a link.',
      error,
      error_message: error.message,
      destination,
      author,
    });
    throw Error('An error occured while inserting a link.');
  }
}

export const updateLink = async (id, update) => { 
  let result;
  try {
    result = db('links').where({ id }).first().update(update).returning('*');
    return result;
  } catch (error) {
    console.error({
      message: 'An error occured while updating a link.',
      error,
      error_message: error.message,
      id, update
    });
    throw Error('An error occured while updating a link.'); 
  }
}

export const removeLink = async (id) => {
  let result;
  try {
    result = await db('links').where({ id }).del();
    return true;
  } catch (error) {
    console.error({
      message: 'An error occured while deleting a link.',
      error,
      error_message: error.message,
      id
    });
    throw Error('An error occured while deleting a link.'); 

  }
}