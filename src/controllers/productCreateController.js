const controller = {
    index: (req, res) => {
        res.render("productCreateForm")
    },
     create:   (req,res)=>{
        res.send (req.body)
     }
    }
    

module.exports = controller;