export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send("Token is not present"); // Use return to prevent further execution
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return res.status(403).send("Token is not valid"); // Use return to prevent further execution
        }
        req.user = user;
        next(); // Proceed to the next middleware or route handler
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next(); // Proceed to the next middleware or route handler
        } else {
            return res.status(403).send("You are not authorized"); // Use return to prevent further execution
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next(); // Proceed to the next middleware or route handler
        } else {
            return res.status(403).send("You are not authorized"); // Use return to prevent further execution
        }
    });
};