class ModelCrud {
  constructor(model) {
    this.model = model;
  }

  getAll = (req, res, next) => {
    return this.model
      .findAll()
      .then((resp) => res.send(resp))
      .catch((err) => next(err));
  };

  add = (req, res, next) => {
    const body = req.body;
    return this.model
      .create({ ...body })
      .then((createdElement) => res.json(createdElement))
      .catch((err) => next(err));
  };

  update = (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    return this.model
      .update(body, {
        where: { id },
      })
      .then((updatedElement) => res.json(updatedElement))
      .catch((err) => next(err));
  };

  delete = (req, res, next) => {
    const { id } = req.params;
    return this.model
      .destroy({
        where: { id },
      })
      .then(() => res.send("item successfully removed"))
      .catch((err) => next(err));
  };
}

module.exports = ModelCrud;
