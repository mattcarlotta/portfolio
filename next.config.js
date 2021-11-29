const open = require("opener");

const { NODE_ENV, NEXT_PUBLIC_CLIENT } = process.env;

if (NODE_ENV === "development")
  setTimeout(() => open(NEXT_PUBLIC_CLIENT), 1000);

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};
