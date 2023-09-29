const router = require("express").Router();

const multer = require("multer");
const { fileUpload, details } = require("../controller/file.controller");

router.get("/", fileUpload);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "-" + file.originalname
      cb(null,  name)
    }
});
  
const upload = multer({ storage: storage })

router.post("/",  upload.single("image"), details);

module.exports = router;