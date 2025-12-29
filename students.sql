CREATE TABLE students (
  reg_no int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  course_id int NOT NULL,
  mobile_no bigint NOT NULL,
  profile_pic blob,
  PRIMARY KEY (reg_no),
  KEY fk_students_users (email),
  KEY fk_students_courses (course_id),
  CONSTRAINT fk_students_courses FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_students_users FOREIGN KEY (email) REFERENCES users (email) ON DELETE CASCADE ON UPDATE CASCADE
)

INSERT INTO students
(reg_no, name, email, course_id, mobile_no, profile_pic)
VALUES
(101, 'Aarav Patil', 'student1@gmail.com', 5, 9876543201, NULL),

(102, 'Riya Sharma', 'student2@gmail.com', 1, 9876543202, NULL),

(103, 'Kabir Singh', 'student3@gmail.com', 2, 9876543203, NULL),

(104, 'Anaya Mehta', 'student4@gmail.com', 2, 9876543204, NULL),

(105, 'Ishaan Deshmukh', 'student5@gmail.com', 3, 9876543205, NULL),

(106, 'Saanvi Joshi', 'student6@gmail.com', 3, 9876543206, NULL),

(107, 'Vivaan Kulkarni', 'student7@gmail.com', 1, 9876543207, NULL),

(108, 'Diya Rane', 'student8@gmail.com', 2, 9876543208, NULL),

(109, 'Atharv Pawar', 'student9@gmail.com', 3, 9876543209, NULL);
