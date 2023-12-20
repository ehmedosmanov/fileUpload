import multer from 'multer'
import path from 'path'

const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];


const storage = multer.diskStorage({
    destination:function (req,file,cb) {
        cb(null, 'src/public')
    },
    filename: function (req,file,cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, uniqueSuffix + ext);
    }
})

const fileFilter = (req, file, cb) => {
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and GIF are allowed.'), false);
    }
};

const limits = {
    fileSize: 1024 * 1024 * 5,
};

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: limits,
});
