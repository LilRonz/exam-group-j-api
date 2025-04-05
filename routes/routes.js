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


// Update an exam : Simulating conflict Again AAAAA
router.put('/exams/:id', (req, res) => {
    const examId = parseInt(req.params.id);
    const exam = findExamById(examId);
    
    if (!exam) {
      return res.status(404).json({ error: 'Exam not found' });
    }
    
    const { name, date } = req.body;
    exam.name = name || exam.name;
    exam.date = date || exam.date;
    
    res.json(exam);
  });

// Create a new exam
router.post('/exams', (req, res) => {
    const newExam = {
      id: exams.length + 1,
      ...req.body
    };
    
    exams.push(newExam);
    res.status(201).json(newExam);
  });
  
  export default router;
