const express=require('express')
const cryptojs=require('crypto-js')
//const jwt=require('jsonwebtoken')

const pool = require('../db/pool')
const result = require('../utils/result')
//const config = require('../utils/config')

const router=express.Router();

router.get('/my_courses',(req,res)=>{
    const email=req.query.email;
    const sql="SELECT c.* FROM students s JOIN courses c on s.course_id = c.course_id WHERE email = ?"
    pool.query(sql,[email],(error ,data)=>{
        res.send(result.createResult(error,data)
        );
    })
})

router.get('/my_courses_with_videos',(req,res)=>{
    const email =req.query.email;
 const sql = `
   SELECT 
  c.course_name,
  v.title,
  v.youtube_url,
  v.added_at,
  DATE_ADD(v.added_at, INTERVAL c.video_expires_date DAY) AS expires_on
FROM students s
JOIN courses c ON s.course_id = c.course_id
JOIN videos v ON c.course_id = v.course_id
WHERE s.email = ?
AND DATE_ADD(v.added_at, INTERVAL c.video_expires_date DAY) >= CURDATE();
`;

  
    pool.query(sql,[email],(error,data)=>{
        res.send(result.createResult(error,data))
    })
})
//----------register student----------------------
router.post('/register-to-course', (req, res) => {
 const { name, email, course_id ,mobile_no} = req.body;
 // Check user exists
const checkUserSql = `SELECT email FROM users WHERE email = ?`;
pool.query(checkUserSql, [email], (error, data) => {

    if (error) {
        return res.send(result.createResult(error));
        }
//  If user NOT exists → insert into users
    if (data.length === 0) {
        const insertUserSql = `INSERT INTO users (email, password, role) VALUES (?, ?, 'student')`;


// default password
// const hashedPassword=cryptojs.SHA256('sunbeam').toString();
    pool.query(insertUserSql, [email,cryptojs.SHA256('sunbeam').toString()],(err2) => {
            if (err2) {
                    return res.send(result.createResult(err2));
                     }
// Now insert into students

        insertStudent(name, email, mobile_no, course_id, res);
            } );

        } else {
// User exists → directly insert student
    insertStudent(name, email, mobile_no, course_id, res);
       }
    });
});

function insertStudent(name, email, mobile_no, course_id, res) {

    const studentSql = `
        INSERT INTO students (name, email, course_id,mobile_no)
        VALUES (?, ?, ?, ?)
    `;

    pool.query(studentSql,[name, email, course_id,mobile_no],(error, data) => {
            res.send(result.createResult(error, data));
        }
    );
}


// -------- change password --------
router.put("/change_password", (req, res) => {
  const { email, newPassword, confirmPassword } = req.body;

  if (!email || !newPassword || !confirmPassword) {
    return res.send({
      success: false,
      message: "All fields are mandatory"
    });
  }

  if (newPassword !== confirmPassword) {
    return res.send({
      success: false,
      message: "Passwords not matching"
    });
  }

  const checkSql = "SELECT * FROM users WHERE email = ?";

  pool.query(checkSql, [email], (error, data) => {
    if (error) {
      return res.send({
        success: false,
        message: "Database error"
      });
    }

    if (data.length === 0) {
      return res.send({
        success: false,
        message: "User not found"
      });
    }

    const updateSql = "UPDATE users SET password = ? WHERE email = ?";
    const hashedPassword = cryptojs.SHA256(newPassword).toString()

    pool.query(updateSql, [hashedPassword, email], (error, result) => {
      if (error) {
        return res.send({
          success: false,
          message: "Password update failed"
        });
      }

      res.send({
        success: true,
        message: "Password updated successfully"
      });
    });
  });
});

module.exports = router;

