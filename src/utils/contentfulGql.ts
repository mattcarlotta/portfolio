const sys = `
sys {
  id
}
`;
const image = `
url
description
contentType
height
width
title
`;

const preview = `
preview {
  ${image}
}
`;

export const PROJECTS = `
${sys}
title
seoDescription
active
status
location
source
description {
  json
}
tech
snapshotsCollection {
 items {
  ${image}
 } 
}
${preview}
slug
`;

export const BACKGROUND = `
${sys}
title
profileImage {
  ${image}
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
${sys}
title
alt
sandboxId
description {
  json
}
${preview}
`;

export const HOMEPAGE_CARDS = `
${sys}
title
description
${preview}
slug
`;
