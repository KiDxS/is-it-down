const axios = require("axios");
exports.checkWebsite = async function checkWebsiteStatus(req, res) {
    try {
        let url = req.body.url;
        if (/(http|https)/.test(url)) {
            let response = await axios.get(`${url}`);

            res.render("index", {
                messageFlash: {
                    alertType: "success",
                    message: url,
                },
            });
        }
    } catch (err) {
        res.render("index", {
            messageFlash: {
                alertType: "danger",
                message: url,
            },
        });
    }
};
