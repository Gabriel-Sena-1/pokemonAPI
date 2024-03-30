class Pokemon {
  constructor(data, img) {
    this._id = data.id;
    this._name = data.name;
    this._weight = data.weight;
    this._img = img;
  }

  // Getters
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get weight() {
    return this._weight;
  }

  get img() {
    return this._img;
  }

  // Setters
  set id(id) {
    this._id = id;
  }

  set name(name) {
    this._name = name;
  }

  set weight(weight) {
    this._weight = weight;
  }

  set img(img) {
    this._img = img;
  }

}

module.exports = Pokemon;