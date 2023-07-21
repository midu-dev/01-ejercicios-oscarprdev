const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const { writeFile, readFileAndCount } = require('..')

test('1. package.json is present', (t) => {
  // read file package.json
  const { name } = require('../package.json')
  // check if pkg.name is equal to 'test'
  assert.strictEqual(name, 'ejercicios-nodejs')
})

test('2. writeFile', (t, done) => {
  const filePath = path.join('tmp', 'testfile')
  writeFile(filePath, 'test data', (err) => {
    assert.ifError(err)
    // check if file exists
    assert.strictEqual(fs.existsSync(filePath), true)
    // remove tmp folder
    fs.rmSync('tmp', { recursive: true })
    done()
  })
})

test.describe('3. readFileAndCount', () => {
  const originalArgv = process.argv

  test.beforeEach(
    () => {
      process.argv = [...originalArgv] // own shallow copy
    }
  )

  test.test('3. readFileAndCount', (t, done) => {
    // write file tmp.txt with text fixture
    const filePath = path.join('tmp', 'tmp.txt')
    const text = 'node is a powerful runtime environment that allows you to build scalable and high-performance applications. With node, you can use JavaScript on the server-side, and it has a vast ecosystem of packages available through npm (node Package Manager).'

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, text)

    process.argv[2] = './tmp/tmp.txt'

    // call readFileAndCount
    readFileAndCount('node', (err, count) => {
      // remove tmp folder
      fs.rmSync('tmp', { recursive: true })
      assert.ifError(err)
      assert.strictEqual(count, 3)
      done()
    })
  })

  test.test('3.1 readFileAndCount, returns 0 if no file exist', (t, done) => {
    process.argv[2] = './tmp/djajsdaksd.txt'

    // call readFileAndCount
    readFileAndCount('node', (err, count) => {
      assert.ifError(err)
      assert.strictEqual(count, 0)
      done()
    })
  })

  test.test('3.2 readFileAndCount, returns error if no word specified', (t, done) => {
    // write file tmp.txt with text fixture
    const filePath = path.join('tmp', 'tmp.txt')
    const text = 'node is a powerful runtime environment that allows you to build scalable and high-performance applications. With node, you can use JavaScript on the server-side, and it has a vast ecosystem of packages available through npm (node Package Manager).'

    fs.mkdirSync(path.dirname(filePath), { recursive: true })
    fs.writeFileSync(filePath, text)

    process.argv[2] = './tmp/tmp.txt'

    // call readFileAndCount
    readFileAndCount(undefined, (err, count) => {
      fs.rmSync('tmp', { recursive: true })

      assert.strictEqual(err.message, 'No se ha especificado la palabra a buscar')
      done()
    })
  })

  test.test('3.3 readFileAndCount, returns error if no path specified', (t, done) => {
    // call readFileAndCount
    readFileAndCount('word', (err, count) => {
      assert.strictEqual(err.message, 'No se ha especificado el path del archivo')
      done()
    })
  })
})
