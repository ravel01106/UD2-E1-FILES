import { jsonToObjectPromise } from "./promises/jsonObjectPromise"

function main(): void {
  console.log('Esto es una función para el tema Promise')
  const arrayPaths: string[] = [`/data/ciudades.json`, `/data/products.json`]
  arrayPaths.map((file) => {
    jsonToObjectPromise(__dirname + file)
    .then((data) =>  console.log(data))
    .catch((err) => console.log(err))
  })

}

main()

export {}
