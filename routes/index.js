const router = require('express').Router();
const tckController = require("../controllers/tck")
const { check,body,validationResult } = require('express-validator');
//router.post('/check',tckController.checkTck);


function tckValidation() {
    return [
        body('Ad')
        .notEmpty()
        .withMessage('Ad is required')
        .isString()
        .withMessage('Ad must be  string')
        .trim(),
        body('Soyad')
        .notEmpty()
        .withMessage('Soyad is required')
        .isString()
        .withMessage('Soyad must be  string')
        .trim(),
        body('DogumYili').isLength({
            max: 4
        }).
        withMessage('DogumYili must be year format'),
        body('TCKimlikNo')
        .isNumeric()
        .withMessage('TCKimlikNo must be numeric')
        .isLength({
            min:11,
            max: 11
        })
        .withMessage('TCKimlikNo must be 11 charachter')
    ];
  }


router.post('/check', tckValidation(), (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    tckController.checkTck(req, res,next)
});





module.exports = router;