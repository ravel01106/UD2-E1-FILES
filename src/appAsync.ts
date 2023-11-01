import { jsonToObjectAsyncAwait } from "./aync-await/jsonObjectAsync"

function main(): void {
  console.log('Esto es una función para el tema Async')
  // const ciudadesPath = __dirname + '/data/ciudades.json'
  const arrayPaths: string[] = [`/data/ciudades.json`, `/data/products.json`]

  arrayPaths.map((file) =>  {
    jsonToObjectAsyncAwait(__dirname + file)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

  })
}

main()

export {}
