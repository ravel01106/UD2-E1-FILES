import fs from 'fs'

/**
 * checkDirectory(): This function checks if the directory path
 * passed by parameter exits. If not, it creates the directory.
 *
 * @param filePath is the path to be read and / or to be create.
 */

function checkDirectory(filePath: string) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log('No existe el directorio exports...')
      fs.mkdirSync(filePath)
      console.log('Se ha creado correctamente el directorio exports.')
    }
  } catch (err) {
    console.log(err)
  }
}

export { checkDirectory }
