import tape from "tape"

import Metalsmith from "metalsmith"
import filenames from "../src"

tape("metalsmith-filenames", t => {
  new Metalsmith(__dirname)
    .use(
      filenames()
    )
    .use(files => {
      const names = Object.keys(files)
      t.equal(names[0], files[names[0]].filename, "should add .filename property")
      t.end()
    })
    .build(err => {if (err) {throw err}})
})
