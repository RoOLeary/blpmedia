import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { sortByDate, sortByViews } from "../utils/sort"

export function getPosts() {
  const postFiles = fs.readdirSync(path.join("content/posts"))

  const posts = postFiles.map((filename) => {
    const slug = filename.replace(".md", "")
    const postContents = fs.readFileSync(
      path.join("content/posts", filename),
      "utf8"
    )

    const { data: frontmatter, content } = matter(postContents)

    return {
      slug,
      frontmatter,
      content,
    }
  })

  return posts
}

export function getFeaturedPosts() {
  const posts = getPosts()
  
  const FeaturedPosts = posts.filter((post) => post.frontmatter.group == "Featured")

  return FeaturedPosts.sort(sortByDate)
}

export function getArchivedPosts() {
  const posts = getPosts()
  
  const archivedPosts = posts.filter((post) => post.frontmatter.group == "Archived")

  return archivedPosts.sort(sortByDate)
}

export function getPopularPosts() {
  const posts = getPosts()
  
  const archivedPosts = posts.filter((post) => post.frontmatter.group == "Archived")

  return archivedPosts.sort(sortByViews).slice(0,6)
}

export function getPostsInCategory(category) {
  const posts = getPosts()

  const postsInSameCategory = posts.filter((post) => {
    return post.frontmatter.category == category
  })

  return postsInSameCategory.sort(sortByDate)
}

export function getPopularPostsInCategory(category) {
  let posts = getPostsInCategory(category)
  return posts.sort(sortByViews).slice(0,4)
}

export function getPostsFromAuthor(author) {
  const posts = getPosts()

  const postsFromAuthor = posts.filter((post) => {
    return post.frontmatter.author == author
  })

  return postsFromAuthor.sort(sortByDate)
}

export function getPopularPostsFromAuthor(author) {
  let posts = getPostsFromAuthor(author)
  return posts.sort(sortByViews).slice(0,4)
}

export function getNextArticle(post) {
  const posts = getPosts()

  const postsInSameCategory = posts.filter((p) => {
    return p.slug != post.slug && p.frontmatter.category == post.frontmatter.category
  })

  if (postsInSameCategory.length > 0) {
    /* Return random post in same category */
    return postsInSameCategory[Math.floor(Math.random() * postsInSameCategory.length)]
  } else {
    /* Return random post */
    return posts[Math.floor(Math.random() * posts.length)]
  }
}

export function getPostsWithTag(tagSlug) {
  const posts = getPosts()
  
  const postsWithTag = posts.filter((post) => {
    return post.frontmatter.tags.some((tag) => {
      return tag.toLowerCase().replace(/ /g, '-') === tagSlug;
    });
  })

  return postsWithTag
}