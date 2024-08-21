const express = require("express");
const app = express();

const cats = [
  { id: "1", name: "fluf" },
  { id: `2`, name: `matan` },
];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/cats", (req, res) => {
  res.json();
});

app.get("/cats/info", (req, res) => {
    res.send("Cats are evil");
  });

app.get("/cats/:catId", (req, res) => { // dynamic routes will always be towards the end of the code
  const catId = req.params.catId;
  let cat = null;
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].id === catId) cat = cats[i];
  }
  if (cat === null) return res.send("Cat not found");
  else res.json(cat);
});


app.get("/login", (req, res) => {
  res.send("Please login");
});

app.get("/protected", (req, res) => {
  res.redirect("/login");
});

app.get("/*", (req, res) => {
  // must be on the end otherwise will always run despite the fact that there are existing URLs
  res.send("Oops, it seems like you are lost...");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
