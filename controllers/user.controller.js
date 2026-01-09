export const welcomeUser = (req, res) => {
  const { username } = req.params;
  const { role = "Admin" } = req.query;

  res.send(`<h1>Welcome, ${username} your role is ${role}!</h1>`);
};

export const homePage = (req, res) => {
  res.send(`
    <form action="/create-user" method="POST">
      <label>Name:</label>
      <input type="text" name="username" />
      <button type="submit">Submit</button>
    </form>
  `);
};

export const createUser = (req, res) => {
  const { username } = req.body;
  console.log("Username:", username);
  return res.redirect("/");
};

export const getUsers = (req, res) => res.send("Here is the list of all users.");
export const addUser = (req, res) => res.send("A new user has been added.");
