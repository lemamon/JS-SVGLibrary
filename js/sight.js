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
}

class Sight {
  constructor(selector, width, height) {
    this.svg = new SVGElement("svg");
    this.svg.attr({ viewbox: `0 0 ${width} ${height}` });
    this.svg.append(selector);

    return this;
  }

  draw(type, attrs) {
    const svg = new SVGElement(type);
    svg.attr(attrs);
    svg.append(this.svg);

    return svg;
  }
}
