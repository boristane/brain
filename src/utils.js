function encode(s) {
  const encoded = s.split('').map(c => c.charCodeAt(0) / 255);
  return encoded;
}

function encodeData(data) {
  return data.map(entry => ({
    input: encode(entry.input),
    output: entry.output,
  }));
}

function serialise(data) {
  const maxLength = Math.max(...data.map(entry => entry.input.length));
  const encoded = encodeData(data);
  const serialised = [];
  encoded.forEach((elt) => {
    while (elt.input.length < maxLength) {
      elt.input.push(0);
    }
    serialised.push(elt);
  });
  return serialised;
}

module.exports = {
  serialise,
  encode,
  encodeData,
};
