export const PROJECTS = `
sys {
  id
}
title
seoDescription
active
status
location
source
description {
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
        height
        width
        contentType
      }
    }
  }
  json
}
tech
snapshotsCollection {
 items {
  description
  url
  contentType
  height
  width
  title
 } 
}
preview {
  description
  url
  contentType
  height
  width
  title
}
slug
`;

export const BACKGROUND = `
sys {
  id
}
title
profileImage {
  description
  url
  contentType
  height
  width
  title
}
location
rank
email
location
description {
  json
}
tech
education
`;

export const EXPLORATIONS = `
sys {
  id
}
title
alt
sandboxId
description {
  json
}
preview {
  description
  url
  contentType
  height
  width
  title
}
`;

export const HOMEPAGE_CARDS = `
sys {
  id
}
title
description
preview {
  description
  url
  contentType
  height
  width
  title
}
slug
`;
