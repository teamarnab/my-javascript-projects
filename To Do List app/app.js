const express = require("express");
const fs = require("fs");
const { title } = require("process");
const app = express();
const port = process.env.PORT || 3500;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  fs.readdir("./tasks", function (err, tasks) {
    if (err) {
      console.log("There was an error reading the task directory");
    } else {
      res.render("index", { tasks: tasks });
      console.log(tasks);
    }
  });
});

app.post("/submit", (req, res) => {
  fs.writeFile(
    `./tasks/${req.body["task-title"].split(" ").join("")}.txt`,
    `${req.body["task-details"]}`,
    (err) => {
      if (err) {
        res.send("There was an error creating the task");
      } else {
        console.log("Task created successfully");
      }
    }
  );
  res.redirect("/");
});

app.get("/task-details/:filename", (req, res) => {
  let task_name = req.params.filename;
  fs.readFile(`./tasks/${req.params.filename}`, "utf-8", (err, taskdata) => {
    if (err) {
      console.log("error reading file");
    } else {
      res.render("task-data", { task_name: task_name, taskdata: taskdata });
    }
  });
});

app.get("/delete/:filename", (req, res) => {
  fs.unlink(`./tasks/${req.params.filename}`, (err, done) => {
    if (err) {
      console.log("Error");
    } else {
      res.redirect("/");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
