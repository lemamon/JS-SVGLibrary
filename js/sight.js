class SVGElement {
  constructor(type) {
    this.type = type;
    this.namespace = "http://www.w3.org/2000/svg";
    this.node = document.createElementNS(this.namespace, type);

    return this;
  }

  attr(attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      this.node.setAttributeNS(null, key, value);
    }
    return this;
  }

  append(element) {
    const parent =
      typeof element === "string"
        ? document.querySelector(element)
        : element.node;

    parent.appendChild(this.node);
    return this;
  }
