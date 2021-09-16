const UserServices = require('../services/users.services');
const UserController = {
  login: async (req, res) => {
    /**
     * Valido por el dni y password para poder logearse.
     */
    const { password, dni } = req.body;
    if (!password || !dni) {
      return res.status(200).json({ message: 'You must complete the password and ID field' });
    }

    try {
      const userFound = await UserServices.login({ password, dni });
      return res.status(200).json(userFound);
    } catch (err) {
      return res.status(404).json({ message: err.message });
    }
  },
  modifyData: async (req, res) => {
    try {
      console.log(req.body, 'esto es body en el controller');
      const userModify = await UserServices.modifyData(req.params.id, req.body);
      res.status(200).json(userModify);
    } catch (err) {
      res.status(err.status).json({ message: err.message });
    }
  },
  AddUser: async (req, res) => {
    try {
      const { role, email, name, password, phone, dni, cuil } = req.body;
      if (role && email && name && password && phone && dni && cuil) {
        const newUser = await UserServices.createUser({ role, email, name, password, phone, dni, cuil });
        return res.status(200).json(newUser);
      } else {
        return res.status(400).json({ message: 'You need to fill in the fields' });
      }
    } catch (err) {
      return res.status(409).json({ message: err.message });
    }
  },
  findOne: async (req, res) => {
    try {
      const userFind = await UserServices.findOne(req.params.id);
      res.status(200).json(userFind);
    } catch (err) {
      res.status(err.status).json({ message: err.message });
    }
  },
  fetchAll: async (req, res) => {
    try {
      const allUsers = await UserServices.fetchAll(req.query);
      res.status(200).json(allUsers);
    } catch (err) {
      res.status(err.status).json({ message: err.message });
    }
  },
};

module.exports = UserController;
