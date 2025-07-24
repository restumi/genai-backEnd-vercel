import axios from "axios";

export default async function hendler(req, res) {
    if(req.method !== "POST"){
        return res.status(405).json({ error : "method not allowed"})
    }

    const { message } = req.body

    try{
        const geminiRes = await axios.post(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyA5ZlyxAVEMdPKjw2-3LEBdOcN0vDx4o_4",
            {
                contens : [{ parts : [{ text : message }] }]
            }
        );

        const geminiTex = geminiRes;

        res.status(200).json({ response : geminiTex })
    } catch (err) {
        res.status(500).json({ err : "gagal terhubung" })
    }
}   