export const controller = (req, res) => {
    const { name , lastname } = req.params; // Esto es lo mismo...
    /* const name = req.params.name;        // ...que esto.
    const lastname = req.params.lastname; */
    res.json({ user: name + ' ' + lastname });
}

export const createUser = (req, res) => {
    const { name } = req.params;
    res.json({ user: name });
  };
  
  export const getUsers = (req, res) => {
    const { name } = req.params;
    res.json({ user: "hola" });
  };
  
  export const getUser = (req, res) => {
    const { name } = req.params;
    res.json({ user: name });
  };
  
  export const updateUser = (req, res) => {
    const { name } = req.params;
    res.json({ user: name });
  };
  
  export const deleteUser = (req, res) => {
    const { name } = req.params;
    res.json({ user: name });
  };  