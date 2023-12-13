const { normalizeURL } = require('./crawl.js')
const { test, expect } = require('@jest/globals')

    // here we are adding different tests upon which we will test all normalising walues  

test ('normalizeURL strip protocol ' , () => {
    const input ='https://blog.boot.dev/path'
    const actual = normalizeURL(input)  // actual output of our nomalized fucn
    const expected = 'blog.boot.dev/path' //expected output
    expect(actual).toEqual(expected)  //checking values
})

test ('normalizeURL strip trailing slash ' , () => {
    const input ='https://blog.boot.dev/path/'
    const actual = normalizeURL(input)  // actual output of our nomalized fucn
    const expected = 'blog.boot.dev/path' //expected output
    expect(actual).toEqual(expected)  //checking values
})

test ('normalizeURL capitals ' , () => {
    const input ='https://BLOG.boot.dev/path/'
    const actual = normalizeURL(input)  // actual output of our nomalized fucn
    const expected = 'blog.boot.dev/path' //expected output
    expect(actual).toEqual(expected)  //checking values
})

test ('normalizeURL strip http ' , () => {
    const input ='http://blog.boot.dev/path/'
    const actual = normalizeURL(input)  // actual output of our nomalized fucn
    const expected = 'blog.boot.dev/path' //expected output
    expect(actual).toEqual(expected)  //checking values
})
