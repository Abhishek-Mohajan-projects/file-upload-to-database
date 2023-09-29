const path = require("path");
const Image = require("../models/file.model")

const fileUpload = (req, res) => {
    const filePath = path.join(__dirname , ".." , "views" , "index.html");
    res.status(200).sendFile(filePath);
};

const details = async(req, res) => {
    try {
        const detailsUser = new Image({
            name : req.body.name,
            image : req.file.filename
        });
        await detailsUser.save()
        res.status(200).send(detailsUser)
    }catch(error){
        res.status(500).send(error.message);
    }
};


module.exports = {fileUpload, details};