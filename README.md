# 1. List of Contributors

- Features:
  - Olandag: Leader.
  - Alquisola: Implement user add functionality.
  - Minoza: Implement user listing and retrieval functionality.
  - Camingao: Implement user update functionality.
  - Leader: Manage the main branch and ensure integration.

# 2. API DOCUMENTATION
### 1: GET http://localhost:3000/exams-group
- {"message": "Group J API"}

### 2: GET http://localhost:3000/exams
- {
  "exams": [
    { 
      "id": 1, 
      "name": "ENGLISH Exam", 
      "date": '"2025-04-11"
    },
    { 
      "id": 2, 
      "name": "FILIPINO Exam", 
      "date": "2025-04-12" 
    }
  ]
}

### 3: GET http://localhost:3000/exams-group
- { "name": "'FILIPINO Exam'", "date": "'2025-04-12'" }

### 4: UPDATE http://localhost:3000/exams/3
- { "name": "'Math Exam'", "date": "'2025-04-18'" }
