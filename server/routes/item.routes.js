console.log("item.routes.js");

const Items = require("../controllers/item.controller");

module.exports = app => {
    app.get("/api/item", Items.getAll);
    app.post("/api/item", Items.create);
    app.get("/api/item/:_id", Items.getOne);
    app.put("/api/item/:_id", Items.update);
    app.delete("/api/item/:_id", Items.remove);
}