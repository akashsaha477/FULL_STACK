const mongoose= require("mongoose");

mongoose.connect("mongodb+srv://akashsaha477:A2870055nandan@cluster0.dcdhu.mongodb.net/userappnew")





const User = mongoose.model('Users', { name: String, email: String, password: String });

app.post("/signup",async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    const existingUser = await User. findOne({ email: username });
        if (existingUser) {
           return res.status(400).send("Username already exists");
}

const user = new User({
    name: name, 
    email: username, 
    password: password
});

user.save();
res.json({
    "msg": "User created successfully"
})

})