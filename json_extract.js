const Parser = require("json2csv").Parser;
const fs = require("fs");
const streets = require("./export.json");
const importFields = [
  "type",
  "properties.@id",
  "properties.highway",
  "properties.name",
  "geometry.type",
  "geometry.coordinates"
];
const saveLocation = "/home/andy/work/streets/output/extract.tsv";

console.log(typeof streets);

try {
  const json2csvParser = new Parser({
    fields: importFields,
    delimiter: "\t",
    quote: "",
    header: false
  });
  const tsv = json2csvParser.parse(streets.FeatureList);
  console.log(tsv);
  fs.writeFile(saveLocation, tsv, function(err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved to " + saveLocation);
  });
} catch (err) {
  console.error(err);
}
