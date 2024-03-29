const multer = require("multer")

exports.uploadImgProfile = (imageFile) => {
    const storage = multer.diskStorage({
        destination: function (req, file,cb) {
            cb(null, "public/profile")
        },
        filename: function(req, file,cb) {
            cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""))
        }
    })

    const fileFilter = function (req, file, cb) {
        if (file.fieldname === imageFile) {
          if (!file.originalname.match(/\.(jpg|JPG|png|PNG|jpeg|JPEG)$/)) {
            req.fileValidationError = {
              message: "Only image files are allowed"
            }
            return cb(new Error("Only image file are allowed"), false)
          }
        }
        cb(null, true)
      }

    const sizeInMB = 10
    const maxSize = sizeInMB * 1000 * 1000

    const upload = multer({
        storage,
        fileFilter,
        limits: {
        fileSize: maxSize
        }
    }).single(imageFile)

    return (req, res, next) => {
        upload(req, res, function (err) {
          if (req.fileValidationError) {
            return res.status(400).send(req.fileValidationError)
          }
    
          //tidak ada file yang disubmit
          if (!req.file && !err) {
            return res.status(400).send({
              message: "please select a file to upload"
            })
          }
    
          // ukuran file melebihi limit
          if (err) {
            if (err.code === "LIMIT_FILE_SIZE") {
              return res.status(400).send({
                message: "Max size file 10MB"
              })
            }
    
            return res.status(400).send(err)
          }
    
          return next()
        })
      }
}

exports.uploadImgGaleri = (imageFile) => {
  const storage = multer.diskStorage({
      destination: function (req, file,cb) {
          cb(null, "public/galeri")
      },
      filename: function(req, file,cb) {
          cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""))
      }
  })

  const fileFilter = function (req, file, cb) {
      if (file.fieldname === imageFile) {
        if (!file.originalname.match(/\.(jpg|JPG|png|PNG|jpeg|JPEG)$/)) {
          req.fileValidationError = {
            message: "Only image files are allowed"
          }
          return cb(new Error("Only image file are allowed"), false)
        }
      }
      cb(null, true)
    }

  const sizeInMB = 10
  const maxSize = sizeInMB * 1000 * 1000

  const upload = multer({
      storage,
      fileFilter,
      limits: {
      fileSize: maxSize
      }
  }).single(imageFile)

  return (req, res, next) => {
      upload(req, res, function (err) {
        if (req.fileValidationError) {
          return res.status(400).send(req.fileValidationError)
        }
  
        //tidak ada file yang disubmit
        if (!req.file && !err) {
          return res.status(400).send({
            message: "please select a file to upload"
          })
        }
  
        // ukuran file melebihi limit
        if (err) {
          if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).send({
              message: "Max size file 10MB"
            })
          }
  
          return res.status(400).send(err)
        }
  
        return next()
      })
    }
}

exports.uploadImgBerita = (imageFile) => {
  const storage = multer.diskStorage({
      destination: function (req, file,cb) {
          cb(null, "public/berita")
      },
      filename: function(req, file,cb) {
          cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, ""))
      }
  })

  const fileFilter = function (req, file, cb) {
      if (file.fieldname === imageFile) {
        if (!file.originalname.match(/\.(jpg|JPG|png|PNG|jpeg|JPEG)$/)) {
          req.fileValidationError = {
            message: "Only image files are allowed"
          }
          return cb(new Error("Only image file are allowed"), false)
        }
      }
      cb(null, true)
    }

  const sizeInMB = 10
  const maxSize = sizeInMB * 1000 * 1000

  const upload = multer({
      storage,
      fileFilter,
      limits: {
      fileSize: maxSize
      }
  }).single(imageFile)

  return (req, res, next) => {
      upload(req, res, function (err) {
        if (req.fileValidationError) {
          return res.status(400).send(req.fileValidationError)
        }
  
        //tidak ada file yang disubmit
        if (!req.file && !err) {
          return res.status(400).send({
            message: "please select a file to upload"
          })
        }
  
        // ukuran file melebihi limit
        if (err) {
          if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).send({
              message: "Max size file 10MB"
            })
          }
  
          return res.status(400).send(err)
        }
  
        return next()
      })
    }
}
