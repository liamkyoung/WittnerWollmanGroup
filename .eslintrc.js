module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts', '**/src/components/ui/*', '**/src/hooks/use-toast.ts'],
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      typescript: {}, // use TypeScript resolver
    },
  }, // Used to ignore the file extension errors for imports in projects
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    // Other rules...
  },
}
