const multer = require("multer");
const uuid = require("uuid");
//req.file ==>[fieldname, originalname, mimetype, size, path]

const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpeg",
    "image/png": "png",
    "image/gif": "gif",
    "image/webp": "webp",
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: function (req, file, cb) {
        //unique nom image
        const ext= file.mimetype.split("/")[1] ; // 'image/jpeg' ==> 'jpeg'
        if(!MIME_TYPES[file.mimetype]){            
            return cb(new Error("Format de l'image invalide", 400), false);

        }
        //Sauvgarder dans db
        req.body.image = "Produit"+"-"+file.fieldname + "-" + uuid.v4() +"-"+ Date.now() + "." + ext;
        cb(null, req.body.image);
        
    },
    
});

const upload = multer({ storage: storage });


module.exports = upload.single("image");