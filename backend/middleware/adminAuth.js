import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
    try {

        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            return res.json({ success: false, message: "Not Authorized Login Again" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 👉 decoded normally payload, so just allow
        req.user = decoded;

        next();

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export default adminAuth;