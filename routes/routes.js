import { Router } from 'express';

const router = Router();

// Sample exam data
const exams = [
  { id: 1, name: 'ENGLISH Exam', date: '2025-04-11' },
  { id: 2, name: 'FILIPINO Exam', date: '2025-04-12' }
];

// Helper function to find an exam by ID
const findExamById = (id) => exams.find(exam => exam.id === id);

// Base API route
router.get('/exam-group', (req, res) => {
  res.json({ message: "Group J API" });
});

// Get all exams
router.get('/exams', (req, res) => {
  res.json(exams);
});
