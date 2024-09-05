const checkAuth = (req, res, next) => {
    if (req.session) {
        return next(); // Call next if session exists
    }
    // If session doesn't exist, send a 401 response
    return res.status(401).json({ message: 'Unauthorized: cannot access' });
}

module.exports = checkAuth;