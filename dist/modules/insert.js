export const insert = async (req, res) => {
    try {
        const { text } = req.body.text;
        if (!text) {
            return res.status(400).json({ error: "Text is required" });
        }
        res.json();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
