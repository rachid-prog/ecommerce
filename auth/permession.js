const permession = (req, res, next) => {
    //1- l'utilisateur doit etre connecté et avoir un role admin
    if(req.user.role !== "admin") return res.status(403).json({ message: "Accès refusé" });
    next();
}

module.exports = permession;
