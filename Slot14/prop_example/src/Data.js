const animals = [
    {
      name: "Lion",
      scientificName: "Panthero leo",
      size: 140,
      diet: ["meat"],
      image: "./lion.jpg", // Thay bằng URL hình thật
    },
    {
      name: "Gorilla",
      scientificName: "Gorilla beringei",
      size: 205,
      diet: ["plants", "insects"],
      additional: {
        notes: "This is the eastern gorilla. There is also a western gorilla that is a different species.",
      },
      image: "./gozila.jpg", // Thay bằng URL hình thật
    },
    {
      name: "Zebra",
      scientificName: "Equus quagga",
      size: 322,
      diet: ["plants"],
      additional: {
        notes: "There are three different species of zebra.",
        link: "https://en.wikipedia.org/wiki/Zebra",
      },
      image: "./zera.jpg", // Thay bằng URL hình thật
    },
  ];
  
  export default animals;