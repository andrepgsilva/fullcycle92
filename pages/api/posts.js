export default function handler(req, res) {
  
  const posts = [
    {
      id: 1,
      name: 'Portugal',
      image_url: 'http://images.unsplash.com/photo-1555881400-74d7acaacd8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },
    {
      id: 2,
      name: 'Brazil',
      image_url: 'http://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },

    {
      id: 3,
      name: 'Germany',
      image_url: 'http://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },

    {
      id: 4,
      name: 'France',
      image_url: 'http://images.unsplash.com/photo-1507666664345-c49223375e33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },

    {
      id: 5,
      name: 'Mexico',
      image_url: 'http://images.unsplash.com/photo-1547995886-6dc09384c6e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },

    {
      id: 6,
      name: 'Swiss',
      image_url: 'http://images.unsplash.com/photo-1527668752968-14dc70a27c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },

    {
      id: 7,
      name: 'Australia',
      image_url: 'http://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },

    {
      id: 8,
      name: 'Spain',
      image_url: 'http://images.unsplash.com/photo-1509840841025-9088ba78a826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },

    {
      id: 9,
      name: 'United States',
      image_url: 'http://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      excerpt: 'Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo.',
      body: 'Pellentesque luctus et risus sed venenatis. Vivamus ultricies risus vitae dolor commodo, sit amet viverra sapien tempus. Proin scelerisque ornare eros, eu lobortis purus iaculis sed. Vestibulum consequat auctor nisi id varius. Aliquam sodales, erat ut accumsan commodo, eros lorem accumsan leo, nec vehicula leo turpis et lorem. Mauris at volutpat odio. Suspendisse quis dapibus nibh. Maecenas feugiat augue eros, sed tincidunt leo posuere quis. Phasellus venenatis lorem justo, nec consequat nibh consectetur nec. Nulla nisl lacus, dapibus nec pellentesque luctus, placerat faucibus justo. Nam commodo rutrum arcu ut rutrum. Quisque sit amet iaculis eros, a gravida est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus tempor auctor vulputate. Nulla et elit ex. Suspendisse ac nulla efficitur, viverra massa vitae, rhoncus purus.'
    },
  ]
  
  res.status(200).json(posts)
}
