const path = required ("path");
const router = required("express").Router();
const apiRoutes = required("./api");

router.use("/api", apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router