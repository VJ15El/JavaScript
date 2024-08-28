const resumeData = {
    "name": "John Doe",
    "title": "Senior Developer",
    "contact": {
      "email": "johndoe@example.com",
      "phone": "+123456789"
    },
    "skills": ["C#", "WPF", ".NET", "SQL", "Azure"],
    "experience": [
      {
        "company": "ABC Corp",
        "position": "Senior Developer",
        "years": "2020 - Present",
        "responsibilities": [
          "Led full-cycle project development",
          "Developed automated reports",
          "Optimized project functionalities"
        ]
      },
      {
        "company": "XYZ Ltd",
        "position": "Junior Developer",
        "years": "2016 - 2020",
        "responsibilities": [
          "Participated in migration projects",
          "Authored documentation",
          "Enhanced UI interfaces"
        ]
      }
    ],
    "education": {
      "degree": "B.Sc. in Computer Science",
      "university": "Tech University",
      "graduationYear": 2016
    }
  };



// Iterating over experience
for (let i = 0; i < resumeData.experience.length; i++) {
  console.log(resumeData.experience[i].company);
}

// Iterating over the contact details
for (let key in resumeData.contact) {
    console.log(`${key}: ${resumeData.contact[key]}`);
  }

  // Iterating over skills
for (let skill of resumeData.skills) {
    console.log(skill);
  }

  // Iterating over responsibilities in each job experience
  resumeData.experience.forEach((job) => {
    job.responsibilities.forEach((responsibility) => {
      console.log(responsibility);
    });
  });