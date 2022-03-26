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

const description = `
description {
  json
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
${description}
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
${description}
tech
education
`;

export const EXPLORATIONS = `
${sys}
title
sandboxId
${preview}
slug
`;

export const HOMEPAGE_CARDS = `
${sys}
title
description
${preview}
slug
`;
