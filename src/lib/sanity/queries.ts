export const featuredPostsQuery = `
  *[_type == "blog" && category == "Featured"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    description,
    "slug": slug.current,
    publishedAt,
    "imageUrl": featuredImage.asset._ref,
    category
  }
`;

export const allPostsQuery = `
  *[_type == "blog"] | order(publishedAt desc)[$start...$end] {
    _id,
    title,
    description,
    "slug": slug.current,
    publishedAt,
    "imageUrl": featuredImage.asset._ref,
    category
  }
`;

export const singlePostQuery = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "slug": slug.current,
    publishedAt,
    "imageUrl": featuredImage.asset._ref,
    category,
    content
  }
`;

export const totalPostsQuery = `
  count(*[_type == "blog"])
`; 



export const imageGalleryQuery = `
*[_type == "imageGallery"]{
  title,
  categories[]{
    categoryTitle,
    images[]{
      image{
        asset->{
          _id,
          url
        }
      },
      title,
      alt
    }
  }
}

`;

