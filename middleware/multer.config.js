const multer = require("multer");
const uuid = require("uuid");


const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },
    filename: function (req, file, cb) {
        //unique nom image
        const ext= file.mimetype.split("/")[1] ; // 'image/jpeg' ==> 'jpeg'
        if(!MIME_TYPES[file.mimetype]){            
            return cb(new Error("Format de l'image invalide", 400), false);

        }
        //Sauvgarder dans db
        req.body.image = file.fieldname + "-" + uuid.v4() + Date.now() + "." + ext;
        cb(null, file.fieldname + "-" + uuid.v4() + Date.now() + "." + ext);
        
    },
});

const upload = multer({ storage: storage });


module.exports = upload.single("image");