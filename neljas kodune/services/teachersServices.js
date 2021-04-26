const db = require('../db');
const database = require('../database');

const teachersService = {};

teachersService.getTeachers = async () => {
  const teachers = await db.query('SELECT id, name FROM teachers WHERE deleted = 0');
  return teachers;
};

teachersService.getTeacher = async (req) => {
  const result = await db.query('SELECT id, name FROM teachers WHERE id = ? AND deleted = 0', [req.params.id]);
  return result;
};

teachersService.updateTeacher = async (req) => {
  result = await db.query('UPDATE teachers SET name ? WHERE id = ?', [req.body.name, req.params.id]);
  return result.id;
};

teachersService.deleteTeacher = async (req) => {
  result = await db.query('UPDATE teachers SET deleted 1 WHERE id = ?', [req.params.id]);
  return result.id;
};

teachersService.createTeacher = async (req) => {
  result = await db.query('INSERT INTO teachers VALUES (NULL, ?)', [req.body.name]);
  return result.id;
};

module.exports = teachersService;