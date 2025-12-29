CREATE TABLE `courses` (
  `course_id` int NOT NULL AUTO_INCREMENT,
  `course_name` varchar(100) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `fees` int NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `video_expire_days` int NOT NULL,
  PRIMARY KEY (`course_id`)
)

INSERT INTO courses
(course_id, course_name, description, fees, start_date, end_date, video_expire_days)
VALUES
(1, 'Old Java', 'Core Java Basics', 20000, '2025-01-01', '2025-03-01', 59),

(2, 'C Programming', 'Procedural Programming', 18000, '2025-02-01', '2025-04-01', 59),

(3, 'Full Stack Development', 'HTML, CSS, JS, React, Node', 45000, '2025-05-10', '2025-12-10', 214),

(4, 'Data Science', 'Python, ML, Deep Learning', 55000, '2025-06-01', '2025-12-05', 187),

(5, 'Cyber Security', 'Ethical Hacking, Network Security', 40000, '2025-10-01', '2026-02-01', 123),

(6, 'AI & Machine Learning', 'Neural Networks, NLP', 60000, '2025-11-01', '2026-03-01', 120),

(7, 'DevOps Engineering', 'CI/CD, Docker, Kubernetes', 58000, '2025-12-01', '2026-04-01', 121),

(8, 'Cloud Computing', 'AWS, Azure, DevOps Basics', 50000, '2026-01-10', '2026-05-10', 120),

(9, 'Android Development', 'Kotlin, Android Studio', 42000, '2026-02-01', '2026-06-01', 120),

(10, 'Web Designing', 'HTML, CSS, UI/UX, Bootstrap', 30000, '2026-03-01', '2026-07-01', 122),

(11, 'Networking Essentials', 'Routing, Switching, CCNA Basics', 32000, '2026-04-01', '2026-08-01', 122);





CREATE TABLE videos (
    video_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(150) NOT NULL,
    description VARCHAR(255),
    youtube_url VARCHAR(255) NOT NULL,
    added_at DATE NOT NULL,
    CONSTRAINT fk_videos_courses 
        FOREIGN KEY (course_id) 
        REFERENCES courses(course_id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);




INSERT INTO videos
(video_id, course_id, title, description, youtube_url, added_at)
VALUES
(1, 1, 'Intro to Full Stack', 'Overview of full stack development', 'https://youtu.be/fsd101', '2025-01-01'),

(2, 2, 'Data Science Basics', 'What is data science?', 'https://youtu.be/ds102', '2025-02-01'),

(3, 3, 'Cyber Security Intro', 'Basics of security', 'https://youtu.be/cs103', '2025-05-10'),

(4, 4, 'Cloud Intro', 'AWS and Azure overview', 'https://youtu.be/cloud104', '2025-06-01'),

(5, 5, 'AI Overview', 'Understanding AI & ML', 'https://youtu.be/ai105', '2025-10-01'),

(6, 6, 'Web Design Basics', 'HTML & CSS introduction', 'https://youtu.be/wd106', '2025-11-01'),

(7, 7, 'Android Setup', 'Kotlin & Android Studio setup', 'https://youtu.be/ad107', '2025-12-01'),

(8, 8, 'DBMS Concepts', 'Database basics explained', 'https://youtu.be/db108', '2026-01-10'),

(9, 9, 'DevOps Starter', 'CI/CD basics', 'https://youtu.be/dev109', '2026-02-01'),

(10, 10, 'Python Introduction', 'Basics of Python', 'https://youtu.be/py110', '2026-03-01'),

(11, 11, 'Networking Basics', 'Routing & switching intro', 'https://youtu.be/net111', '2026-04-01');




