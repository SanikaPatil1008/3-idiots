const express=require("express")
const pool=require("../db/pool")
const result=require("../util/result")

const router=express.Router()

router.get("/",(req,res)=>{
    const sql=`select * from courses `
    pool.query(sql,(error,data)=>{
        res.send(result.createresult(error,data))
    })
}
)

router.post("/add-course",(req,res)=>{
    
    const {course_name,description,fees,start_date,end_date,video_expire_days}=req.body
    const sql=`insert into courses(course_name,description,fees,start_date,end_date,video_expire_days) values(?,?,?,?,?,?)`
    pool.query(sql,[course_name,description,fees,start_date,end_date,video_expire_days],(error,data)=>{
        res.send(result.createresult(error,data))
    })
})

router.put("/update/:course_id",(req,res)=>{
    const {course_id}=req.params
    const {course_name, description, fees, start_date, end_date, video_expire_days}=req.body
    const sql=`UPDATE courses SET course_name=?,description=?,fees=?,start_date=?,end_date=?,video_expire_days=? WHERE course_id=?`
    pool.query(sql,[course_name, description, fees, start_date, end_date, video_expire_days,course_id],(error,data)=>{
        res.send(result.createresult(error,data))
    })
})

router.delete("/delete/:course_id",(req,res)=>{
    const {course_id}=req.params
    const sql=`delete from courses where course_id=?`
    pool.query(sql,[course_id],(error,data)=>{
        res.send(result.createresult(error,data))
    })
})

//all active courses
router.get("/get_all_active_courses", (req, res) => {
    const sql = `SELECT * FROM courses WHERE end_date >= CURDATE()`;

    pool.query(sql, (error, data) => {
        res.send(result.createresult(error, data));
    })
})

module.exports = router;
