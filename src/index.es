export default () => {
  return files => {
    Object.keys(files).forEach(filename => {
      if (!files[filename].filename) {
        files[filename].filename = filename
      }
    })
  }
}
