function isAvariable(req,res,next){
    const date = new Date()
    const day = date.getDay()
    const hours = date.getHours()

    if(day>0 && day<6 && hours <18 ){
        next()
    }
    else{
        res.render('out')
    }
}


module.exports = isAvariable