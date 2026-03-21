export default function sitemap() {
  const baseUrl = 'https://sesesn.com';
  const paths = ['/', '/about', '/products', '/products/water-soluble', '/products/water-resistant', '/sustainability', '/applications', '/contact'];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
